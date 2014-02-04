;$(document).ready(function() {
})

// set changes to envision
function setSession() {
	console.log('setting session')
	sessionStorage.setItem('envision', JSON.stringify(envision));
}

// integrates data from parse into the envision object
function reconnect(fromParse) {
	envision.quality.DOM          = fromParse.quality.DOM
	envision.quality.explanations = fromParse.quality.explanations

	envision.natural.DOM          = fromParse.natural.DOM
	envision.natural.explanations = fromParse.natural.explanations

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



