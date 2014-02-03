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
	savePerson();
});

function savePerson() {
	$('.submit').click(function() {
		var person = new Person();
		person.save(disect()).then(function(object) {
		  alert("yay! it worked");
		});
	})
}

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
	}

	return form;
}




