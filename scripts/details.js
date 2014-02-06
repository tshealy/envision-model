envision = JSON.parse(sessionStorage.getItem('envision'));

;$(document).ready(function() {
	displayDetails()
});

function displayDetails() {
	var template = _.template($('#question').text());
	var questionNum = window.location.search.slice(1);
	var question = _.findWhere(envision.details, {number: questionNum});
	$('#details').append(template({question: question}));
	description(question.description);
	displayOL(question.list);
}

function displayOL(list) {
	_.each(list, function(ol) {		
		$('#ol').append('<li>'+ ol.letter +'<ol class="number"></ol></li>')
		_.each(ol.nums, function(num, index) {
			$('#ol').children().last().children('.number').append('<li>'+ num +'</li>')
		})
	})
}

function description(description) {
	_.each(description, function(par) {
		$('#description').append('<p>'+par+'</p><br><br>');
	})
}



