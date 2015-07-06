$(document).ready(function() {
    window.location = '../quality_of_life';
	envision.questionCategory = 'natural';
    setSession();
	submitForm();
	update();
});

// save the form if all word minimums have been met
function submitForm() {
	$('.submit').click(function() {
        verifyNames(function () {
    		// find questions not passing word count requirement
    		var questionsWordCount = verifyWordCount(envision.quality.questions.concat(envision.natural.questions));
    		// if all questions pass, save form
    		if (!questionsWordCount.length) {
    			// set timer to converted hours:mins:secs
    			envision.timeTaken = getTimer(new Date() - new Date(envision.timer));

    			save();
    		} else {
    			alert('You must meet the minimum character requirement for the following questions:\n\n' + questionsWordCount.join('\n'))
    		}
        });
	})
}

function save() {
	// a confirm for submission
	if (confirm('Are you sure you want to submit')) {
		// instantiate student
		var student = envision.primed === true ? new StudentB() : new StudentA();
		// set attributes
		student.set(disect())

		// check for if a submission has already been saved
		if (envision._id === undefined) {
			student.save(null, {
				success: function(student) {
					envision._id = student.id;
			  		envision.message = "You've submitted successfully!";
			  		setSession();
			  		window.location = '../survey/index.html';
				},
				error: function() {
					alert('Failure to save. Please submit again.')
				}
			})
		} else {
			student.id = envision._id;
			student.save(null, {
				success: function(student) {
			  		envision.message = "You've updated successfully!";
			  		setSession();
			  		window.location = '../survey/index.html';
				},
				error: function() {
					alert('Failure to update. Please update again.')
				}
			})
		}
	}
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
		timeTaken:        envision.timeTaken
	}

	return form;
}

// verify name
function verifyNames (fun) {
    if (!envision.firstName || !envision.lastName) {
        if (!alert('You must submit a first and last name.')) {
            window.location = '../index.html';
        }
    } else {
        fun();
    }
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

// changing text to update after a successful submission
function update() {
	if (envision._id !== undefined) {
		$('.submit').text('Update');
	}
}
