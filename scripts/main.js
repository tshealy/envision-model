;$(document).ready(function() {
	display(envision.questions)
})

// combined functions for displaying questions
function display(questions) {
	// throw the questions into the DOM
	displayQuestions(questions);
	// change selected and corresponding scores based on current session for value added
	updateSelect('va', 'valueAdded');
	// change selected based on current session for applicability
	updateSelect('ap', 'applicable');
	// display explanation text
	retrieveExplanations();
	// need to re-update data ater updateSelect functions run
	setSession();
}

// appends each question to the tbody tag
function displayQuestions(questions) {
	var template = _.template($('#question').text())

	_.each(questions, function(question) {
		$('tbody').append(template({question: question}))
		$('.category').last().children('.applicability').children('select').change(applicable(question))
		$('.category').last().children('.value-added').children('select').change(updateValues)
		$('.text-area').last().children('.bottom-section').children('textarea').change(updateExplanation(question))
	})

	$('.question-separator').last().remove()
}

// change function for applicability select
function applicable(question) {

	return function() {

		var select = this;
		var val = $(select).val();
		var addedValue = $(select).parent().parent().children('.value-added').children('select')
		var score = $(select).parent().parent().children('.category-score')
		var maxPoints = $(select).parent().parent().children('.possible-points')
		var maxScore = $('#max-score')

		envision.DOM.applicable[$('.ap').index(this)] = $(this).prop('selectedIndex')

		if (val === 'unapplicable') {
			addedValue.children('.no-value').attr('selected', true)
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
		setSession()
	}

}

// change function for value added select
function updateValues() {
	var select = this;
	var val = $(select).val()
	var score = $(select).parent().parent().children('.category-score')
	var index = $(this).prop('selectedIndex')

	envision.totalScore += parseInt(val) - parseInt(score.text())
	$('#actual-score').text(envision.totalScore)

	score.text(val)
	envision.DOM.valueAdded[$('.va').index(this)] = $(this).prop('selectedIndex')
	setSession()
}

// change function for textarea
function updateExplanation(question) {
	
	return function() {
		var index = envision.questions.indexOf(question);
		envision.explanations[index] = $(this).val();
		setSession()
	}
}

// retrieve explanations
function retrieveExplanations() {
	$('textarea').each(function(index) {
		$(this).val(envision.explanations[index])
	})
}

// relate vals for default Conservative
function relate(question, val) {
	var conservativeVal = _.findWhere(question.addedValue, {level: 'Conserving'}).val

	if (val === conservativeVal) {
		return val;
	}
	if (val < conservativeVal) {
		return '-' + (conservativeVal - val).toString();
	}
	return '+' + (question.maxPoints - conservativeVal).toString();
}

// set changes to envision
function setSession() {
	console.log('setting session')
	sessionStorage.setItem('envision', JSON.stringify(envision));
}

// update selects with selected option selected
function updateSelect(klass, propName) {
	// must catch the values here because activating each selects change method will alter the varacity of these values
	var totalScore = envision.totalScore;
	var maxScore = envision.maxScore;

	$('.' + klass).each(function(index) {
		var selectedIndex = envision.DOM[propName][index]
		// 0 to avoid unecessary processing
		if (selectedIndex > 0) {
			$(this).prop('selectedIndex', selectedIndex).change()
		}
	})

	// reset values to what they should be here
	envision.totalScore = totalScore;
	envision.maxScore = maxScore;
	$('#actual-score').text(envision.totalScore)
	$('#max-score').text(envision.maxScore)
}

// integrates data from parse into the envision object
function reconnect(fromParse) {
	envision.quality.DOM          = fromParse.quality.DOM
	envision.quality.explanations = fromParse.quality.explanations

	envision.natural.DOM          = fromParse.natural.DOM
	envision.natural.explanations = fromParse.natural.explanations

	envision.totalScore           = fromParse.totalScore;
	envision.maxScore             = fromParse.maxScore;
}


