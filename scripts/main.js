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
envision.totalScore = 0;

$(document).ready(function() {
	display(envision.questions)
})

// combined functions for displaying questions
function display(questions) {
	determineMaxPoints(questions)
	processSelectOptions(questions)
	displayQuestions(questions)
}

// sets maxPoints each question based on return value of maxPoints function. also side-effectively sets envisions maxScore.
function determineMaxPoints(questions) {
	var maxScore = 0;

	_.each(questions, function(question) {
		question.maxPoints = _.first(maxPoints(question.addedValue)).val
		maxScore += question.maxPoints;
	})

	envision.maxScore = maxScore;
	$('#max-score').text(envision.maxScore)
	console.log(envision.maxScore)
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
			return "<option value='" + val.val + "'>" + val.level + " " + val.val + "</option>"
		}).reverse().join('')
	})
}

// appends each question to the tbody tag
function displayQuestions(questions) {
	_.each(questions, function(question) {
		$('tbody').append(envision.template({question: question}))
		// console.log($('.category').last())
		$('.category').last().children('.applicability').children('select').change(applicable(question))
		$('.category').last().children('.added-value').children('select').change(addValue(question))
	})

	$('.question-separator').last().remove()
}

// onchange function for applicability select
function applicable(question) {

	return function() {

		var select = this;
		var val = $(select).val();
		var addedValue = $(select).parent().parent().children('.added-value').children('select')

		if (val === 'unapplicable') {
			addedValue.children('.no-value').attr('selected', true)
			// sayHey(addedValue)
			addedValue.attr('disabled', 'disabled');
		} else {
			addedValue.attr('disabled', false);
		}
	}

}

// onchange function for value added select
function addValue(question) {

	return function() {
		var select = this;
		var val = $(select).val()
		var score = $(select).parent().parent().children('.category-score')

		envision.totalScore += parseInt(val) - parseInt(score.text())

		// if relative vals
		// score.text(parseInt(score.text()) + parseInt(val))


		$('#actual-score').text(envision.totalScore)
		score.text(val)
	}
}







