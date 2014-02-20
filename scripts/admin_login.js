$(document).ready(function() {
	login();
})

function login() {
	$('.login').click(function() {
		var username = $('.username').val();
		var password = $('.password').val();

		Parse.User.logIn(username, password, {
			success: function(user) {
				window.location = "../admin/index.html"
			},
			error: function(user, error) {
				alert('Username and/or Password incorrect.')
				var username = $('.username').val('');
				var password = $('.password').val('');
			}
		});	
	})
}