// var TestObject = Parse.Object.extend("TestObject");
// var testObject = new TestObject();
// testObject.save({foo: "bar"}).then(function(object) {
//   alert("yay! it worked");
// });

// var Person = Parse.Object.extend("Person");
// var AllPersons = Parse.Collection.extend({
// 	model: Person
// })

$(document).ready(function() {
	envision.questions = envision.natural.questions;
	envision.DOM = envision.natural.DOM;
	envision.explanations = envision.natural.explanations;
	envision.scores = envision.natural.scores;
	// put name in DOM
	// $('.name').text(envision.firstName + ' ' + envision.lastName)
	savePerson();
});

// save the form if all word minimums have been met
function savePerson() {
	$('.submit').click(function() {
		// find questions not passing word count requirement
		var questionsWordCount = verifyWordCount(envision.quality.questions.concat(envision.natural.questions));
		// if all questions pass, save form
		if (questionsWordCount.length === 0) {
			// set timer to converted hours:mins:secs
			envision.timer = getTimer(new Date() - new Date(envision.timer));
			setSession();
			// instantiate student
			var student = new Student();
			// save student
			student.save(disect()).then(function(object) {
			  alert("yay! it worked");
			});		
		} else {
			alert('You must meet the minimum word requirement for the following questions:\n\n' + questionsWordCount.join('\n'))
		}
	})
}

// select only certain values from envision to be saved.
function disect() {
	var form = {
		quality: {
			DOM:          envision.quality.DOM,
			explanations: envision.quality.explanations,
			scores:       envision.quality.scores
		},
		natural: {
			DOM:          envision.natural.DOM,
			explanations: envision.natural.explanations,
			scores:       envision.natural.scores
		},

		totalScore:       envision.totalScore,
		maxScore:         envision.maxScore,
		firstName:        envision.firstName,
		lastName:         envision.lastName,
		timer:            envision.timer
	}

	return form;
}

// find any questions that do not pass the word count requirement
function verifyWordCount(questions) {
	var questionNums = [];
	_.each(questions, function(question) {
		if (!question.enoughWords) {
			questionNums.push(question.number);
		}
	})
	return questionNums;
}


