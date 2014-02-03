var Students = Parse.Collection.extend({
	model: Student
})

StudentView = Parse.View.extend({

	tagName: 'tr',

	events: {
		'click .name': 'showForm'
	},

	initialize: function() {
		$('#table').append(this.$el);
		console.log(this)
		console.log(this.model)

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
		window.location = '../quality_of_life/index.html';
	}
})


$(document).ready(function() {
	createRows();
	checkAdmin();
})

function checkAdmin() {
	admin = JSON.parse(sessionStorage.getItem('admin'));

	if (admin === null) {

		admin = {};

		admin.students = new Students();
		admin.students.fetch().then(function(students) {
			displayStudents(students.models);
			sessionStorage.setItem('admin', JSON.stringify(admin));
		})

	} else {
		admin.students = new Students(admin.students)
		displayStudents(admin.students.models)
	}
}

function displayStudents(students) {
	_.each(students, function(student) {
		new StudentView({model: student})
	})
}

function createRows() {
	var backgroundClass;
	_.each(envision.quality.questions.concat(envision.natural.questions), function(question) {
		backgroundClass = question.number.slice(0,1) === 'Q' ? 'quality' : 'natural';

		$('#question-number').append('<td class="question-number ' + backgroundClass + '">'+ question.number +'</td>')
	})
	$('#question-number').append('<td class="question-number">Total Score</td>')
}
