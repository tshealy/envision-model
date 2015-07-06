;$(document).ready(function() {
    displayNames();
	validateName();
	toAdmin();
    envisionCheck(determinText);
})

function validateName() {
	$('#submit-name').click(function() {
		var firstName = $('.first-name').val();
		var lastName = $('.last-name').val();

		if (firstName === '' || lastName === '') {
			modal();
		} else {
			envision.firstName = firstName;
			envision.lastName = lastName;
			startTimer();

			setSession();
			window.location = 'quality_of_life';
		}

	})
}

function toAdmin() {
	$('.admin-login').click(function() {
		if (Parse.User.current() === null) {
			window.location = "admin_login";
		} else {
			window.location = "admin";
		}
	})
}

function determinText() {
    var text = 'Please rate the case study provided to you during the information session. Your role in the project is Sustainability Coordinator and your job is to meet Envision\'s "levels of achievement". This will require you to make decisions, plan ahead, and create project details for your entire team.<br><br>';
    var standard = '';
	var primed = 'The South L.A. Wetland Park is provided as an example project.';

	text += envision.primed === true ? primed : standard;
	$('.directions-copy').append(text);
}

// put name values in inputs if already set
function displayNames () {
    if (envision.firstName) $('.first-name').val(envision.firstName);
    if (envision.lastName) $('.last-name').val(envision.lastName);
}

function modal (msg) {
    var template = _.template($('#modal-template').text());
    $('body').append(template());
    // event for modal proceed button
    $('.proceed').off().on('click', function () {
        $('.modal-container').remove();
    })
}
