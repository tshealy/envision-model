admin = JSON.parse(sessionStorage.getItem('admin'));

;$(document).ready(function() {
	if (adminLoggedIn()) {
		// do stuff
		tellMe();
	}
});

function tellMe() {
	console.log(admin)
	console.log(admin.explanations)
	console.log(admin.explanations[admin.explanationIndex])
}