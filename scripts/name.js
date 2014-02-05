;$(document).ready(function() {
	validateName();
	toAdmin();
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