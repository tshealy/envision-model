var StudentsA = Parse.Collection.extend({
	model: StudentA
})

var StudentsB = Parse.Collection.extend({
	model: StudentB
})

StudentView = Parse.View.extend({

	tagName: 'tr',

	className: 'student',

	events: {
		'click .name': 'showForm'
	},

	initialize: function() {
		$('#table').append(this.$el);

		this.render();
	},

	render: function() {
		var scores = this.model.get('quality').scores.concat(this.model.get('natural').scores);

		this.$el.append('<td class="name">'+ this.model.get('firstName') + ' ' + this.model.get('lastName') +'</td>');

		var that = this;
		_.each(scores, function(score) {
			that.$el.append('<td class="score">'+ score +'</td>');
		})

		this.$el.append('<td class="score">'+ this.model.get('totalScore') +'</td>');
		this.$el.append('<td class="score">'+ this.model.get('timeTaken') +'</td>');
	},

	showForm: function() {
		reconnect(this.model.attributes);
		setSession();
		window.open(
		  '../quality_of_life/index.html',
		  '_blank'
		);
	}
})


$(document).ready(function() {
	logout();
	// redirect to admin login if admin not logged in
	if (adminLoggedIn()) {
		// set click events
		defaults('standard')
		defaults('conserving')
		$('.standard').click()
	}
})

function checkAdmin() {
	admin = JSON.parse(sessionStorage.getItem('admin'));

	if (admin === null) {

		admin = {};

		admin.students = collectionSetup();
		// admin.students = new Students();
		admin.students.fetch().then(function(students) {
			adminSetup(students)

			sessionStorage.setItem('admin', JSON.stringify(admin));
		})

	} else {
		var tempCol = collectionSetup();
		admin.students = tempCol.add(admin.students);
		adminSetup(admin.students)

		var length = admin.students.length;
		var tempCol = collectionSetup();
		admin.studentsCheck = tempCol.add(admin.students.models);
		// to check for if students have submitted during current session
		admin.studentsCheck.fetch().then(function(students) {
			if (students.length !== length) {
				$('.student').remove();
				adminSetup(students)

				admin.students = admin.studentsCheck;
				sessionStorage.setItem('admin', JSON.stringify(admin));			
			}
		})
	}
}

// determine what is fetched
function collectionSetup() {
	return envision.conserving === true ? new StudentsB() : new StudentsA()
}

// setup admin
function adminSetup(students) {
	// get explanations
	complieExplanations(students);
	// display column headers
	createRows();
	// display students
	displayStudents(students);
	// dispaly final avgs
	compileScores(students);
	// display avg time
	avgTime(students);
	// header message
	tableHeader();
}

// create student views
function displayStudents(students) {
	_.each(students.models, function(student) {
		new StudentView({model: student});
	})
}

// make a row with a question number in each column
function createRows() {
	var backgroundClass;
	_.each(envision.quality.questions.concat(envision.natural.questions), function(question, index) {
		backgroundClass = questionBackground(question.number);
		// insert question num into the table as a <td>
		$('#question-number').append('<td class="question-number ' + backgroundClass + '">'+ question.number +'</td>');
		// set click event for question number
		$('#question-number').children().last().click(function() {
			admin.explanationIndex = index;
			admin.explanations[admin.explanationIndex];
			sessionStorage.setItem('admin', JSON.stringify(admin));
			window.open(
			  	'../responses/index.html?' + question.number,
			  	'_blank'
			);
		})
	})
	$('#question-number').append('<td class="total-score">Total Score</td>')
	$('#question-number').append('<td class="time">Time</td>')
}

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

	admin.explanations = quality.concat(natural);
	sessionStorage.setItem('admin', JSON.stringify(admin));
}

function getExplanation(students, type, index) {
	return _.map(students.models, function(student) {
		return {
			fullName:  	 student.get('firstName') + ' ' + student.get('lastName'),
			explanation: student.get(type).explanations[index]
		}
	})
}

function compileScores(students) {
	var scores = getScores(students, 'quality').concat(getScores(students, 'natural'));

	$('#table').append('<tr id="avgs"></tr>');
	$('#avgs').append('<td class="name special">Average</td>')
	_.each(scores, function(score) {
		$('#avgs').append('<td class="score special">'+ score +'</td>');
	})

	$('#avgs').append('<td class="score special">'+ _.reduce(scores, function(memo, num) {return memo + num}) +'</td>');
}

function getScores(students, type) {
	var length = envision[type].questions.length;
	var scores = [];

	for (var i = 0; i < length; i++) {
		scores.push(Math.round(_.reduce(_.map(students.models, function(student) {
			return student.get(type).scores[i];
		}), function(memo, num) {return memo + num}) / students.models.length))
	}

	return scores;
}

function avgTime(students) {
	var mils = _.map(students.models, function(student) {
		var time = student.get('timeTaken');
		var hours = parseInt(time.slice(0, 2));
		var mins  = parseInt(time.slice(3, 5));
		var secs  = parseInt(time.slice(6));

		return (secs * 1000) + (mins * 1000 * 60) + (hours * 1000 * 60 * 60);
	})

	mils = Math.floor(_.reduce(mils, function(memo, num) {return memo + num}) / students.models.length);

	$('#avgs').append('<td class="score special">'+ getTimer(mils) +'</td>');
}

function tableHeader() {
	// var headerMsg = envision.conserving === true ? 'Credit Rating for Conserving Default' : 'Credit Rating for Standard Default';
	var headerMsg = 'Credit Rating for ' + (envision.conserving === true ? 'Conserving' : 'Standard') + ' Default'
	$('.credit-rating').text(headerMsg);
}

// logging admin out
function logout() {
	$('.logout').click(function() {
		Parse.User.logOut();
		window.open('../admin_login/index.html')
	})
}

// click for credit rating
function defaults(klass) {
	$('.' + klass).click(function() {
		// set envision.conserving
		setEnvision(klass);

		checkAdmin();
		// set text of the table header
		tableHeader();
		// remove selected class
		$('.options td').removeClass('selected');
		// add selected class to clicked element
		$(this).addClass('selected');
		console.log('conserving is: ', envision.conserving)
	})
}

function setEnvision(klass) {
	envision.conserving = klass === 'conserving' ? true : false;
	// create select drop down data
	processSelectOptions(envision.quality.questions.concat(envision.natural.questions))
}



