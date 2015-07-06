$(document).ready(function() {
    envision.questionCategory = 'quality';
    setSession();
    submitForm();
    update();
})


// save the form if all word minimums have been met
function submitForm() {
    $('.submit').click(function() {
        verifyNames(function () {
            // find questions not passing word count requirement
            var questionsWordCount = verifyWordCount(envision.quality.questions);
            // if all questions pass, save form
            if (!questionsWordCount.length) {
                // set timer to converted hours:mins:secs
                envision.timeTaken = getTimer(new Date() - new Date(envision.timer));
                // check if they really want to save or not
                modalConfirm();
            } else {
                modal('You must meet the minimum character requirement for the following questions:', '<ul class="modal-text">' + _.map(questionsWordCount, function (question) { return '<li>' + question + '</li>'}).join('') + '</ul>')
            }
        });
    })
}

// modals instead of alerts
function modal (msg, text, fun) {
    $('html, body').scrollTop(0);
    var template = _.template($('#modal-template').text());
    $('body').append(template({ msg: msg, text: text}))
    // event for modal proceed button
    $('.proceed').off().on('click', function () {
        $('.modal-container').remove();
        if (fun) fun();
    })
}

function modalConfirm () {
    $('html, body').scrollTop(0);
    var template = _.template($('#modal-template-confirm').text());
    $('body').append(template())
    // event for modal proceed button
    $('.proceed').off().on('click', function () {
        save();
        $('.modal-container').remove();
    })
    $('.cancel').off().on('click', function () {
        $('.modal-container').remove();
    })
}

function save() {
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
                window.location = '../survey';
            },
            error: function() {
                modal('Failure to save. Please submit again.', '')
            }
        })
    } else {
        student.id = envision._id;
        student.save(null, {
            success: function(student) {
                envision.message = "You've updated successfully!";
                setSession();
                window.location = '../survey';
            },
            error: function() {
                modal('Failure to update. Please update again.','')
            }
        })
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
        // natural: {
        //     DOM:          envision.natural.DOM,
        //     explanations: envision.natural.explanations,
        //     scores:       envision.natural.scores
        // },

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
        modal('You must submit a first and last name.', '', function () { window.location = '../' })
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
