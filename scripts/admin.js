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
		'click .x'   : 'deleteStudent',
        'click .note': 'makeNote'
	},

	initialize: function() {
		$('#table').append(this.$el);

		this.render();
	},

	render: function() {
        var studentRow = '';
        var scores = this.model.get('quality').scores.concat(this.model.get('natural').scores);

		studentRow += '<td class="x">x</td>';
		studentRow += '<td class="name">'+ this.model.get('firstName') + ' ' + this.model.get('lastName') +'</td>';

		_.each(scores, function(score) {
			studentRow += '<td class="tar">'+ score +'</td>';
		})

        studentRow += '<td class="tar total-student-score">'+ this.model.get('totalScore') +'</td>';
		studentRow += '<td class="tar max-student-score">'+ this.model.get('maxScore') +'</td>';
        studentRow += '<td class="tar">'+ this.model.get('timeTaken') +'</td>';
		studentRow += '<td class="note">'+ (this.model.get('notes') || '') +'</td>';
        this.$el.append(studentRow);
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
	},

    makeNote: function() {
        var note = this.$el.children('.note');
        var input = $('<input></input>').val((this.model.get('notes') || ''));
        // only want the input inside note <td>
        note.html(input);
        // focus that input
        input.focus();
        // scroll to the right all the way
        $(document).scrollLeft(100000);

        var that = this
        // save change
        input.change(function() {
            that.model.set('notes', $(this).remove().val())
            note.text(that.model.get('notes'))
            that.model.save();
        })

        // don't save, nothing has changed
        input.on('focusout', function() {
            $(this).remove();
             note.text(that.model.get('notes') || '')
        })
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
		// display column headers. Add column header to arg string -> .new-column-header
		createColumns('total-score.max-score.time.notes');
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
	displayScores(group);
	// display avg time
	$('#avgs').append('<td class="tar special">'+ group.avgTime +'</td>');
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
function createColumns(columns) {
    var columnHeaders = '';
    // make array out of columns string
    columns = columns.split('.')
    // remove previous td's
    $('.question-number, .' + columns.join(', .')).remove();

    _.each(envision.quality.questions.concat(envision.natural.questions), function(question, index) {
        var backgroundClass = questionBackground(question.number);
        // insert question num into the table as a <td>
        var questionHeader = $('<td class="question-number ' + backgroundClass + '">'+ question.number +'</td>');
        $('#question-number').append(questionHeader);
        // set click event for question number
        $(questionHeader).click(function() {
            window.open(
                '../responses/index.html?question=' + question.number + '&index=' + index,
                '_blank'
            );
        })
    })
    // each through the columns argument and creat column headers
    _.each(columns, function(column) {
        // split dashed class and capitalize
        var text = _.map(column.split('-'), function(word) { return (word[0].toUpperCase() + word.slice(1)) }).join(' ');
        // create column header
        columnHeaders += '<td class="column-header ' + column + '">' + text + '</td>';
    })
    // append column headers
    $('#question-number').append(columnHeaders);
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
function displayScores(group) {
    // avgs row for the table
    var avgs = '<tr id="avgs">';
    // extra cell
    avgs += '<td></td>';
    avgs += '<td class="name special">Average</td>';
    // add cell for each avgs score
    _.each(group.avgScores, function(score) {
        avgs += '<td class="tar special">'+ score +'</td>';
    })
    // averaging the score totals
    avgs += '<td class="tar special">' + avgTotals(group, 'totalScore') + '</td>';
    // averaging the max totals
    avgs += '<td class="tar special">' + avgTotals(group, 'maxScore') + '</td>';
    // close out the table row
    avgs += '</tr>';
    // append avgs row to table
    $('#table').append(avgs);
}

// averages the total scores for each student
function avgTotals(group, type) {
    // getting score totals from each student
    var scoreTotals = _.map(group.students.models, function(student){return student.get(type)})
    // averaging the totals
    return Math.round(_.reduce(scoreTotals, function(memo, num) {return memo + num}) / scoreTotals.length);
}

// averages the scores for each question
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

