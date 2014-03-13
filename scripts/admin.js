// global admin object
var admin = {
	standard:   {},
	conserving: {}
};

// student collections, A for standard, B for conserving
var StudentsA = Parse.Collection.extend({
	model: StudentA
})

var StudentsB = Parse.Collection.extend({
	model: StudentB
})

// student view to display as a tr in #table
StudentView = Parse.View.extend({

	tagName: 'tr',

	className: 'student',

	events: {
		'click .name': 'showForm',
		'click .x'   : 'deleteStudent'
	},

	initialize: function() {
		$('#table').append(this.$el);

		this.render();
	},

	render: function() {
		var scores = this.model.get('quality').scores.concat(this.model.get('natural').scores);

		this.$el.append('<td class="x">x</td>');
		this.$el.append('<td class="name">'+ this.model.get('firstName') + ' ' + this.model.get('lastName') +'</td>');

		var that = this;
		_.each(scores, function(score) {
			that.$el.append('<td class="score">'+ score +'</td>');
		})

		this.$el.append('<td class="score total-student-score">'+ this.model.get('totalScore') +'</td>');
		this.$el.append('<td class="score">'+ this.model.get('timeTaken') +'</td>');
	},

	showForm: function() {
		reconnect(this.model.attributes);
		setSession();
		window.open(
		  '../quality_of_life/index.html',
		  '_blank'
		);
	},

	deleteStudent: function() {
		if (confirm('Are you sure you want to delete ' + this.model.get('firstName') + ' ' + this.model.get('lastName') + '?')) {
			this.remove();
			this.model.destroy();
		}
	}
})


$(document).ready(function() {
	logout();
	// redirect to admin login if admin not logged in
	if (adminLoggedIn()) {
		// set click events
		displayGroup('standard');
		displayGroup('conserving');
		// fetch collections
		fetchStudents();
	}
})

///////////////////////////
//  FETCH THEM STUDENTS  //
///////////////////////////
// function setup Admin by fetching students
function fetchStudents() {
	// retrieve the students
	admin.standard.students = new StudentsA();
	admin.conserving.students = new StudentsB();

	// making calculations and groupings
	function adminSetup(group, students) {
		admin[group].avgTime = avgTime(admin[group].students)
		admin[group].explanations = complieExplanations(students);
		admin[group].avgScores = avgScores(students, 'quality').concat(avgScores(students, 'natural'));
	}

	// fetch and display the standard students
	admin.standard.students.fetch().then(function(students) {
		adminSetup('standard', students)
		$('.standard').click();
	})

	// just fetch the conserving students
	admin.conserving.students.fetch().then(function(students) {
		adminSetup('conserving', students)
	});
}

//////////////////////
//    CHANGE DOM    //
//////////////////////
// click for changing admin group that is displayed
function displayGroup(klass) {
	$('.' + klass).click(function() {
		// remove rows from table
		$('.student, #avgs').remove();
		// remove selected class
		$('.options td').removeClass('selected');
		// add selected class to clicked element
		$(this).addClass('selected');
		// set text of the table header
		$('#group').text(klass);
		// set envision select options for form viewing
		setEnvision(klass);

		// set the current admin group
		admin.group = admin[klass];
		// display column headers
		createRows(klass);
		// display the students
		adminDisplay(admin.group);
		// set session
		sessionStorage.setItem('admin', JSON.stringify(admin));
	})
}

// display admin
function adminDisplay(group) {
	// display students
	displayStudents(group.students);
	// dispaly final avgs
	displayScores(group.avgScores);
	// display avg time
	$('#avgs').append('<td class="score special">'+ group.avgTime +'</td>');
}

// create student views
function displayStudents(students) {
	_.each(students.models, function(student) {
		new StudentView({model: student});
	})
}

// sets select options for accurate viewing of student form. just being nit picky
function setEnvision(klass) {
	envision.conserving = klass === 'conserving' ? true : false;
	// create select drop down data
	processSelectOptions(envision.quality.questions.concat(envision.natural.questions))
}

// make a row with a question number in each column
function createRows() {
	// remove previous td's
	$('.question-number').remove();
	$('.total-score').remove();
	$('.time').remove();

	var backgroundClass;
	_.each(envision.quality.questions.concat(envision.natural.questions), function(question, index) {
		backgroundClass = questionBackground(question.number);
		// insert question num into the table as a <td>
		$('#question-number').append('<td class="question-number ' + backgroundClass + '">'+ question.number +'</td>');
		// set click event for question number
		$('#question-number').children().last().click(function() {
			window.open(
			  	'../responses/index.html?question=' + question.number + '&index=' + index,
			  	'_blank'
			);
		})
	})
	$('#question-number').append('<td class="total-score">Total Score</td>')
	$('#question-number').append('<td class="time">Time</td>')
}

//////////////////////
//   EXPLANATIONS   //
//////////////////////
// click event for question number to compile all explanations for that question
function complieExplanations(students) {
	// get quality questions explanations
	var quality = _.map(envision.quality.questions, function(question, index) {
		return getExplanation(students, 'quality', index)
	})

	// get natural questions explanations
	var natural = _.map(envision.natural.questions, function(question, index) {
		return getExplanation(students, 'natural', index)
	})

	// returning explanations
	return quality.concat(natural);
}

function getExplanation(students, type, index) {
	return _.map(students.models, function(student) {
		return {
			fullName:  	 student.get('firstName') + ' ' + student.get('lastName'),
			explanation: student.get(type).explanations[index]
		}
	})
}

//////////////////////
//      SCORES      //
//////////////////////
// displaying the scores for current admin group
function displayScores(scores) {
	$('#table').append('<tr id="avgs"></tr>');
	// extra cell
	$('#avgs').append('<td></td>')
	$('#avgs').append('<td class="name special">Average</td>')
	_.each(scores, function(score) {
		$('#avgs').append('<td class="score special">'+ score +'</td>');
	})

	// save other data here
	var scoreTotals = _.map($('.total-student-score'), function(num){return +$(num).text()})
	$('#avgs').append('<td class="score special">'+ (Math.round(_.reduce(scoreTotals, function(memo, num) {return memo + num}) / scoreTotals.length)) +'</td>');
}

function avgScores(students, type) {
	var length = envision[type].questions.length;
	var scores = [];

	for (var i = 0; i < length; i++) {
		scores.push(Math.round(_.reduce(_.map(students.models, function(student) {
			return student.get(type).scores[i];
		}), function(memo, num) {return memo + num}) / students.models.length))
	}

	return scores;
}

//////////////////////
//       TIME       //
//////////////////////
function avgTime(students) {
	var mils = _.map(students.models, function(student) {
		var time = student.get('timeTaken');
		var hours = parseInt(time.slice(0, 2));
		var mins  = parseInt(time.slice(3, 5));
		var secs  = parseInt(time.slice(6));

		return (secs * 1000) + (mins * 1000 * 60) + (hours * 1000 * 60 * 60);
	})

	mils = Math.floor(_.reduce(mils, function(memo, num) {return memo + num}) / students.models.length);

	return getTimer(mils)
}

// logging admin out
function logout() {
	$('.logout').click(function() {
		Parse.User.logOut();
		window.open('../admin_login/index.html')
	})
}



