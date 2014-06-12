// I hate this ugly function
function envisionCheck (fun) {
    envision = JSON.parse(sessionStorage.getItem('envision'));
    envision.questions = envision.quality.questions.concat(envision.natural.questions);

    // process question data that is dependent on the conserving value
    if (envision.conserving === undefined) {
        console.log('gotta check num')
        var Default = Parse.Object.extend('Default');
        var query = new Parse.Query(Default);
        query.get('ecpC6QxmHI', {
            success: function (data) {
                // got num from Parse
                var num = data.get('num');
                // set conserving val based on num
                envision.conserving = num % 2 ? true : false;
                // set the defaults for envision questions
                setDefaults(envision.quality.questions, envision.natural.questions);
                // ++ the num from parse and save
                data.set('num', num + 1).save();
                // run the callback function for when envision has been set
                fun();
            },
            error: function () {
                console.log('error: parse did not return num')
                envision.conserving = randomForm() ? true : false;
                setDefaults(envision.quality.questions, envision.natural.questions);
                fun();
            }
        })
    } else {
        // if statement for admin purposes
        if (!envision.questions[0].selectOptions) setClientSide();
        fun();
    }
}

function setDefaults (quality, natural) {
    envision.totalScore = envision.conserving === true ? conservingTotalScore(envision.quality.questions) : 0;

    envision.quality.DOM = {
        applicable: makeZeroArray(quality.length),
        valueAdded: envision.conserving === true ? [4,4,4,2,2,4,4,4,3,3,4,4] : makeZeroArray(quality.length)
    }

    // envision.natural.DOM = {
    //     applicable: makeZeroArray(natural.length),
    //     valueAdded: envision.conserving === true ? [2,4,2,4,4,3,4,3,4,4,2,2,1,4] : makeZeroArray(natural.length)
    // }

    // set explanation
    envision.quality.explanations = makeStringArray(quality.length);
    // envision.natural.explanations = makeStringArray(natural.length);

    // set scores
    envision.quality.scores = scores(quality);
    // envision.natural.scores = scores(natural);

    // sets envision and sets selects and details links
    setClientSide();
}

// setup for envision that is not saved to parse
function setClientSide () {
    // create select drop down data
    processSelectOptions(envision.questions)
    // get details for links
    envision.details = details();
    // stores envision
    sessionStorage.setItem('envision', JSON.stringify(envision));
}

// set scores array
function scores(questions) {
    if (envision.conserving) {
        return _.map(questions, function(question) {
            return _.findWhere(question.valueAdded, {level: 'Conserving'}).val
        })
    }
    return makeZeroArray(questions.length);
}

// randomize form given
function randomForm() {
    return Math.floor(Math.random() * 2);
}

function makeZeroArray(length) {
    return _.map(_.range(length), function (n, i) { return n - i })
}

function makeStringArray (length) {
    return _.map(_.range(length), function (n, i) { return '' })
}

// takes valueAdded array of each question and generates option tags with correct values
function processSelectOptions(questions) {
    _.each(questions, function(question) {
        question.selectOptions = _.map(question.valueAdded, function(val) {
            return "<option value=" + val.val + ">" + val.level + " (" + relate(question, val.val) + ")</option>";
        }).join('');
        // no value added option
        question.selectOptions = "<option class='no-value' value='0'>No Value Added (" + relate(question, 0) + ")</option>" + question.selectOptions;
    })
}

// relate vals for default Conservative
function relate(question, val) {
    if (envision.conserving) {
        var conservativeVal = _.findWhere(question.valueAdded, {level: 'Conserving'}).val

        if (val === conservativeVal) {
            return val;
        }
        if (val < conservativeVal) {
            return '-' + (conservativeVal - val).toString();
        }
        return '+' + (question.maxPoints - conservativeVal).toString();
    }
    return val;
}

function conservingTotalScore(questions) {
    return _.reduce(_.map(questions, function(question) {
        return _.findWhere(question.valueAdded, {level: 'Conserving'}).val
    }), function(memo, num) {return memo + num})
}

function findQuestion(questions, number) {
    return _.findWhere(questions, {number: number})
}

function findValue(question, level) {
    return _.findWhere(question.valueAdded, {level: level}).val;
}

// gets relative points for details links
function detailsPoints(type, number, level) {
    var question = findQuestion(envision[type].questions, number);
    var val = findValue(question, level);
    return relate(question, val);
}

