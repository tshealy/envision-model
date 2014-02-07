;$(document).ready(function() {
	validateName();
	toAdmin();
	determinText();
})

function validateName() {
	$('#submit-name').click(function() {
		var firstName = $('.first-name').val();
		var lastName = $('.last-name').val();

		if (firstName === '' || lastName === '') {
			alert('Please submit a first and last name.')
		} else {
			envision.firstName = firstName;
			envision.lastName = lastName;
			envision.timer = envision.timer === undefined ? new Date() : envision.timer;

			setSession();
			window.location = 'quality_of_life/index.html';
		}

	})
}

function toAdmin() {
	$('.admin-login').click(function() {
		if (Parse.User.current() === null) {
			window.location = "admin_login/index.html";
		} else {
			window.location = "admin/index.html";
		}
	})
}

function determinText() {
	var standard = 'You are starting at the industry norm benchmark with 0 points. Every decision made above industry norm will earn you "level of achievement" points.';
	var conserving = 'You are startng at the environmental neutral benchmark, that is the <em>conserving</em> level of achievement with 304 points. Decisions made  below the <em>conserving</em> level will lose you points. Decisions made  above <em>conserving</em> will earn you points.';

	var text = envision.conserving === true ? conserving : standard;
	$('#dependent-text').append(text);
}

