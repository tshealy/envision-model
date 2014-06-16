envision = JSON.parse(sessionStorage.getItem('envision'));

var templateHTML = '<div class="overview width color-depends">' +
    '<span class="question-blurb"><%= question.number %> <%= question.synopsis %></span>' +
    '<span class="breakdown">Intent</span>' +
    '<span class="intent"><%= question.intent %></span>' +
    '<span class="breakdown">Metric</span>' +
    '<span class="metric"><%= question.metric %></span>' +
'</div>' +

'<div class="section-heading width">Levels of Achievement</div>' +

'<table class="width">' +
    '<tbody>' +
        '<tr class="levels color-depends">' +
            '<td class="level">Improved</td>' +
            '<td class="level">Enhaced</td>' +
            '<td class="level">Superior</td>' +
            '<td class="level">Conserving</td>' +
            '<td class="level">Restorative</td>' +
        '</tr>' +
        '<tr>' +
            '<td>' +
                '<span class="points">(<%= question.improved.points %>)</span>' +
                '<span class="synopsis"><%= question.improved.synopsis %></span>' +
                '<br>' +
                '<p><%= question.improved.copy %></p>' +
            '</td>' +
            '<td>' +
                '<span class="points">(<%= question.enhanced.points %>)</span>' +
                '<span class="synopsis"><%= question.enhanced.synopsis %></span>' +
                '<br>' +
                '<p><%= question.enhanced.copy %></p>' +
            '</td>' +
            '<td>' +
                '<span class="points">(<%= question.superior.points %>)</span>' +
                '<span class="synopsis"><%= question.superior.synopsis %></span>' +
                '<br>' +
                '<p><%= question.superior.copy %></p>' +
            '</td>' +
            '<td>' +
                '<span class="points">(<%= question.conserving.points %>)</span>' +
                '<span class="synopsis"><%= question.conserving.synopsis %></span>' +
                '<br>' +
                '<p><%= question.conserving.copy %></p>' +
            '</td>' +
            '<td>' +
                '<span class="points">(<%= question.restorative.points %>)</span>' +
                '<span class="synopsis"><%= question.restorative.synopsis %></span>' +
                '<br>' +
                '<p><%= question.restorative.copy %></p>' +
            '</td>' +
        '</tr>' +
    '</tbody>' +
'</table>' +
 
'<div class="section-heading width">Descirption</div>' +
 
'<div class="width" id="description"><%= question.descriptionHTML %></div>' +
 
'<div class="section-heading width">Advancing to Higher Achievement Levles</div>' +
 
'<div class="width">' +
    '<span class="emphit">Benchmark</span>' +
    '<p><%= question.benchmark %></p>' +
    '<br>' +
    '<br>' +
    '<span class="emphit">Performance Improvement</span>' +
    '<p><%= question.perfImprove %></p>' +
'</div>' +
 
'<div class="section-heading width">Evaluation Criteria and Documentation</div>' +
 
'<div class="width" id="ol"><%= question.olHTML %></div>';

;$(document).ready(function() {
	displayDetails();
    // $('iframe').height($(window).height());
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
    var questionNum = $('#qNumber').text();
    var question = _.findWhere(envision.details, {number: questionNum});
    return question;
}

// display the details
function makeItRain() {
    var template = _.template(templateHTML);
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
	if ($('#qNumber').text().slice(0,1) === 'Q') {
		$('.color-depends').css('background', '#D87400');
	} else {
		$('.color-depends').css('background', '#909D51');
	}
}












