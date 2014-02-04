var Students = Parse.Collection.extend({
	model: Student
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
	// redirect to admin login if admin not logged in
	if (adminLoggedIn()) {
		checkAdmin();
	}
})

function checkAdmin() {
	admin = JSON.parse(sessionStorage.getItem('admin'));

	if (admin === null) {

		admin = {};

		admin.students = new Students();
		admin.students.fetch().then(function(students) {
			adminSetup(students)

			sessionStorage.setItem('admin', JSON.stringify(admin));
		})

	} else {
		admin.students = new Students(admin.students);
		adminSetup(admin.students)

		var length = admin.students.length;
		admin.studentsCheck = new Students(admin.students);
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

// setup admin
function adminSetup(students) {
	// get explanations
	complieExplanations(students);
	// display column headers
	createRows();
	// display students
	displayStudents(students);
}

// create student views
function displayStudents(students) {
	_.each(students.models, function(student) {
		new StudentView({model: student})
	})
}

// make a row with a question number in each column
function createRows() {
	var backgroundClass;
	_.each(envision.quality.questions.concat(envision.natural.questions), function(question, index) {
		backgroundClass = question.number.slice(0,1) === 'Q' ? 'quality' : 'natural';
		// insert question num into the table as a <td>
		$('#question-number').append('<td class="question-number ' + backgroundClass + '">'+ question.number +'</td>');
		// set click event for question number
		$('#question-number').children().last().click(function() {
			admin.explanationIndex = index;
			admin.explanations[admin.explanationIndex];
			sessionStorage.setItem('admin', JSON.stringify(admin));
			window.open(
			  	'../responses/index.html',
			  	'_blank'
			);
		})
	})
	$('#question-number').append('<td class="total-score">Total Score</td>')
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
			name:        student.get('firstName') + ' ' + student.get('lastName'),
			explanation: student.get(type).explanations[index]
		}
	})
}
