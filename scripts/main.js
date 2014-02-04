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

	_.each(questions, function(question, index) {
		// append question
		$('tbody').append(template({question: question}))

		// set DOM values for question to be reference in change callbacks
		var DOM = {
			textArea:   $('.text-area').last().children('.bottom-section').children('textarea'),
			wordCount:  $('.text-area').last().children('.bottom-section').children('.word-minimum').children('.word-number'),
			score:      $('.category').last().children('.category-score'),
			maxPoints:  $('.category').last().children('.possible-points'),
			valueAdded: $('.category').last().children('.value-added').children('select'),
			applicable: $('.category').last().children('.applicability').children('select'),
			indexVal:   index
		}

		// set change callbacks
		DOM.applicable.change(applicable(question, DOM));
		DOM.valueAdded.change(updateValues(question, DOM));
		DOM.textArea.change(updateExplanation(question));
	})

	$('.question-separator').last().remove()
}

// change function for applicability select
function applicable(question, DOM) {

	return function() {
		// this is the select who's change callback was triggered
		var val = $(this).val();
		var maxScore = $('#max-score')

		envision.DOM.applicable[DOM.indexVal] = $(this).prop('selectedIndex')
		envision.scores[DOM.indexVal] = 0;

		// if select has been changed to not applicable . .
		if (val === 'not applicable') {
			DOM.valueAdded.children('.no-value').attr('selected', true)
			DOM.valueAdded.change();
			DOM.valueAdded.attr('disabled', 'disabled');
			
			maxScore.text(envision.maxScore -= question.maxPoints)
			DOM.score.text('- -')
			DOM.maxPoints.text('- -')

		} else {
			DOM.valueAdded.attr('disabled', false);
			maxScore.text(envision.maxScore += question.maxPoints)
			DOM.score.text(0)
			DOM.maxPoints.text(question.maxPoints)
		}
		setSession()
	}

}

// change function for value added select
function updateValues(question, DOM) {

	return function() {
		// this is the select who's change callback was triggered
		// val is current value of this select
		var val = $(this).val();
		// get selected index
		var selectedIndex = $(this).prop('selectedIndex');
		// get text
		var text = $($(this).children()[selectedIndex]).text()
		
		// now set wordCount and change in DOM
		question.wordCount = determineWordCount(getText(text));
		DOM.wordCount.text(question.wordCount);

		// takes totalScore and subtracts the previous value and adds the new value resulting in the correct change in score
		envision.totalScore += parseInt(val) - parseInt(DOM.score.text());
		// setting score based on order of question
		envision.scores[DOM.indexVal] = parseInt(val);

		// set new score in DOM
		$('#actual-score').text(envision.totalScore);
		// set question's score to the value of the selected option
		DOM.score.text(val);

		// store the index of the selected option for recall purposes
		envision.DOM.valueAdded[DOM.indexVal] = selectedIndex;
		// save changes in envision to the session
		setSession();
	}
}

// change function for textarea
function updateExplanation(question) {
	
	return function() {
		var index = envision.questions.indexOf(question);
		var words = $(this).val().split(' ').length;
		envision.explanations[index] = $(this).val();

		// if (words < question.wordCount) {
		// 	$(this).css('border', '3px solid red')
		// } else {
		// 	question.enoughWords = true;
		// }

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
	var conservativeVal = _.findWhere(question.valueAdded, {level: 'Conserving'}).val

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

function determineWordCount(level) {
	switch (level) {
		case "Improved": return 20;
		case "Enhanced": return 40;
		case "Superior": return 60;
		case "Conserving": return 80;
		case "Restorative": return 100;
		default: return 0;
	}
}

// returns first word in string
function getText(text) {
	return text.slice(0, text.indexOf(' '))
}



