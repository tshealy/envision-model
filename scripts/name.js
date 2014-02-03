;$(document).ready(function() {
	validateName()
})

function validateName() {
	$('#submit-name').click(function() {
		var firstName = $('.first-name').val();
		var lastName = $('.last-name').val();

		if (firstName === '' || lastName === '') {
			alert('Please submit a first and last name.')
		} else {
			window.location = 'quality_of_life/index.html';		
		}

	})
}