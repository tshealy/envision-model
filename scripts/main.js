var envision = {};

envision.questions = [
	{
		number: 'QL1.1',
		synopsis: 'Improve community quality of life.',
		body: 'Improve the net quality of life of all communities affected by the project and mitigate negative impacts to communities.',
		addedValue: [
			{
				level: 'Improved',
				val: 2
			},
			{
				level: 'Enhanced',
				val: 5
			},
			{
				level: 'Superior',
				val: 10
			},
			{
				level: 'Conserving',
				val: 20
			},
			{
				level: 'Restorative',
				val: 25
			}
		]
	},
	{
		number: 'QL1.2',
		synopsis: 'Stimulate sustainable growth and development.',
		body: 'Support and stimulate sustainable growth and development, including improvements in job growth, capacity building, productivity, business attractiveness and livability.',
		addedValue: [
			{
				level: 'Improved',
				val: 1
			},
			{
				level: 'Enhanced',
				val: 2
			},
			{
				level: 'Superior',
				val: 5
			},
			{
				level: 'Conserving',
				val: 13
			},
			{
				level: 'Restorative',
				val: 16
			}
		]
	}
]

envision.template = _.template($('#question').text())


$(document).ready(function() {
	display(envision.questions)
})

// combined functions for displaying questions
function display(questions) {
	determineMaxPoints(questions)
	processSelectOptions(questions)
	displayQuestions(questions)
}

// sets maxPoints each question based on return value of maxPoints function
function determineMaxPoints(questions) {
	_.each(questions, function(question) {
		question.maxPoints = _.first(maxPoints(question.addedValue)).val
	})
}

// sorts vals to find greatest
function maxPoints(addedValue) {
	return addedValue.sort(function(a, b) {
		return b.val - a.val;
	})
}

// takes addedValue array of each question and generates option tags with correct values
function processSelectOptions(questions) {
	_.each(questions, function(question) {
		question.selectOptions = _.map(question.addedValue, function(val) {
			console.log(val.level)
			return "<option value='" + val.level + " " + val.val + "'>" + val.level + " " + val.val + "</option>"
		}).reverse().join('')
	})
}

// appends each question to the tbody tag
function displayQuestions(questions) {
	_.each(questions, function(question) {
		$('tbody').append(envision.template({question: question}))
	})

	$('.question-separator').last().remove()
}







