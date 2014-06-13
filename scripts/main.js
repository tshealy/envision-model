;$(document).ready(function() {
})

// set changes to envision
function setSession() {
	sessionStorage.setItem('envision', JSON.stringify(envision));
}

// integrates data from parse into the envision object
function reconnect(fromParse) {
	envision.quality.DOM          = fromParse.quality.DOM
	envision.quality.explanations = fromParse.quality.explanations

	// envision.natural.DOM          = fromParse.natural.DOM
	// envision.natural.explanations = fromParse.natural.explanations

    envision.quality.scores = fromParse.quality.scores
    // envision.natural.scores = fromParse.natural.scores

	envision.totalScore           = fromParse.totalScore;
	envision.maxScore             = fromParse.maxScore;
}

// check if admin is logged in
function adminLoggedIn() {
	if (Parse.User.current() === null) {
		$('body').css('disply', 'none')
		window.location = '../admin_login/index.html';
		return false;
	}
	return true;
}

// get params from url and make an array of objects
function getParams() {
    // var str = window.location.search
    var str = window.location.href.split('?')
    var obj = {};
    var array = [];

    // using a look ahead regex to split the params
    _.each(str[1].split('&'), function(str){
        array = str.split('=');
        obj[array[0]] = array[1]
    })

    return obj
}

function questionBackground(question) {
	return question.slice(0,1) === 'Q' ? 'quality' : 'natural';
}

// converts miliseconds to hours:mis:secs
function getTimer(mils) {
	var hour = Math.floor(mils / 1000 / 60 / 60 % 24);
	var min = Math.floor(mils / 1000 / 60 % 60);
	var sec = Math.floor(mils / 1000 % 60);

	return addZero(hour) + ':' + addZero(min) + ':' + addZero(sec);
}

// adds a zero if necessary to a time value
function addZero(val) {
	return ('0' + val).slice(-2)
}

// testing
function fillStuff(level) {
	var text = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmo dtempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
	$('.va').prop('selectedIndex', level);
	$('textarea').val(text + text)
	$('.va').change();
}

// testing
function test () {
    var textareas = $('textarea');
    var applicables = $('.ap');
    var valueAddeds = $('.va');
    var text = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, consectetur adipisicing elit, consectetur adipisicing elit, consectetur adipisicing elit, consectetur adipisicing elit, consectetur adipisicing elit, consectetur adipisicing elit, sed do eiusmo dtempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';


    _.each(textareas, function(textarea, index) {
        var va = $(valueAddeds[index]);
        var optionsLength = va.children().length;
        var selectedIndex = Math.floor(Math.random() * optionsLength);
        
        va.prop('selectedIndex', selectedIndex).change();
        $(textarea).val(text).keyup();

        if (randomForm()) {
            $(applicables[index]).prop('selectedIndex', 1).change();
        }
    })
}

function startTimer () {
    envision.timer = envision.timer === undefined ? new Date() : envision.timer;
}
