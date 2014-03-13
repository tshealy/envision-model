admin = JSON.parse(sessionStorage.getItem('admin'));

;$(document).ready(function() {
	if (adminLoggedIn()) {
		// do stuff
        var params = getParams();
		setQuestionNum(params.question);
		displayResponses(admin.group.explanations[params.index]);
	}
});

// get params from url and make an array of objects
function getParams() {
    var str = window.location.search
    var obj = {};
    var array = [];

    // using a look ahead regex to split the params
    _.each(str.split(/(?=[&])/), function(str){
        array = str.slice(1).split('=');
        obj[array[0]] = array[1]
    })
    return obj
}

function displayResponses(responses) {
	var template = _.template($('#one-response').text())

	_.each(responses, function(response) {
		$('#responses').append(template({response: response}))
	})
}

function setQuestionNum(question) {
	$('title').text('Envision: ' + question)
	$('.question-number').addClass(questionBackground(question)).text(question)
}