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
		$('.category').last().children('.added-value').children('select').change(updateValues)
	})

	$('.question-separator').last().remove()
}

// onchange function for applicability select
function applicable(question) {

	return function() {

		var select = this;
		var val = $(select).val();
		var addedValue = $(select).parent().parent().children('.added-value').children('select')
		var score = $(select).parent().parent().children('.category-score')
		var maxPoints = $(select).parent().parent().children('.possible-points')
		var maxScore = $('#max-score')


		if (val === 'unapplicable') {
			addedValue.children('.no-value').attr('selected', true)
			// updateValues(addedValue)
			updateValues.call(addedValue)
			addedValue.attr('disabled', 'disabled');
			
			maxScore.text(envision.maxScore -= question.maxPoints)
			score.text('- -')
			maxPoints.text('- -')

		} else {
			addedValue.attr('disabled', false);
			maxScore.text(envision.maxScore += question.maxPoints)
			score.text(0)
			maxPoints.text(question.maxPoints)
		}
	}

}

// onchange function for value added select
function updateValues() {
	var select = this;
	var val = $(select).val()
	var score = $(select).parent().parent().children('.category-score')

	envision.totalScore += parseInt(val) - parseInt(score.text())
	$('#actual-score').text(envision.totalScore)

	score.text(val)
}







