envision = JSON.parse(sessionStorage.getItem('envision'));

;$(document).ready(function() {
	displayDetails()
});

function displayDetails() {
    // display the details
    makeItRain();
	// determine color
	colorDepends();
	// uggly hack to remove parens that shouldn't be there
	removeParens();
}

// get the question number from url and use it to find question in envision
function getQuestion() {
    var questionNum = getParams().question;
    var question = _.findWhere(envision.details, {number: questionNum});
    return question;
}

// display the details
function makeItRain() {
    var template = _.template($('#question').text());
    // get the question
    var question = getQuestion();
    // format the description
    question.descriptionHTML = formatDescription(question.description);
    // format the ol
    question.olHTML = formatOL(question.list);
    // append the template
    $('#details').append(template({question: question}));
}

// using my bullify.js to make the lists
// put description in DOM
function formatDescription(list) {
    var unorderedList = new Bullify('ul', 'li');
    var description = '';

    _.each(list, function(item) {
        if (typeof(item) === 'string') {
            description += '<p>'+item+'</p><br><br>';
        } else {
            // make a ul out of the array
            description += unorderedList.bullify(item);
        }
    })
    return description;
}

// put ol's in the DOM
function formatOL(list) {
    var orderdList = new Bullify('ol', 'li');
    return orderdList.bullify(list);
}

// untidy way of getting rid of parens I don't want
function removeParens() {
	$('.points').each(function() {
		if ($(this).text() === '()') {
			$(this).text('');
		}
	})
}

// change color pallet based on what type of questoin
function colorDepends() {
	if (getParams().question.slice(0,1) === 'Q') {
		$('.color-depends').css('background', '#D87400');
	} else {
		$('.color-depends').css('background', '#909D51');
	}
}


