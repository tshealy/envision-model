admin = JSON.parse(sessionStorage.getItem('admin'));

;$(document).ready(function() {
	if (adminLoggedIn()) {
		// do stuff
		tellMe();
		setQuestionNum();
		displayResponses(admin.explanations[admin.explanationIndex]);
	}
});

function tellMe() {
	console.log(admin)
	console.log(admin.explanations)
	console.log(admin.explanations[admin.explanationIndex])
}

function displayResponses(responses) {
	var template = _.template($('#one-response').text())

	_.each(responses, function(response) {
		console.log(response)
		// $('#responses').append('<tr><td>'+response.name+'<td/><td>'+response.explanation+'<td/></tr>')
		$('#responses').append(template({response: response}))
	})
}

function setQuestionNum() {
	var questionNum = window.location.search.slice(1)
	$('title').text('Envision: ' + questionNum)
	$('.question-number').addClass(questionBackground(questionNum)).text(questionNum)
}