$(document).ready(function() {
	login();
	logout();
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
				console.log('ooops')
			}
		});	
	})
}

function logout() {
	if (Parse.User.current() !== null) {
		$('header').append('<div class="admin admin-logout">Logout</div>');

		$('.admin-logout').click(function() {
			Parse.User.logOut();
			window.location = '../index.html'
		})
	}
}