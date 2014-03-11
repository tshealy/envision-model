envision = JSON.parse(sessionStorage.getItem('envision'));

;$(document).ready(function() {
	displayDetails()
});

function displayDetails() {
	var template = _.template($('#question').text());
	var questionNum = window.location.search.slice(1);
	var question = _.findWhere(envision.details, {number: questionNum});
	$('#details').append(template({question: question}));
	// throw each par in DOM and space with <br> tags
	description(question.description);
	// throw the ol into the DOM
	displayOL(question.list);
	// determine color
	colorDepends(questionNum)
	// uggly hack to remove parens that shouldn't be there
	removeParens();
}

// these DOM functions are so nasty . .
// put ol's in the DOM
function displayOL(list) {
	_.each(list, function(ol) {		
		$('#ol').append('<li>'+ ol.letter +'<ol class="number"></ol></li>')
		_.each(ol.nums, function(num, index) {
			if (typeof(num) === 'string') {
				$('#ol').children().last().children('.number').append('<li>'+ num +'</li>')	
			} else {
				console.log('hey hey what')
				$('#ol .number').last().append('<ul></ul>')
				console.log($('#ol .number').last())
				_.each(num, function(bul) {
					console.log(bul)
					$('#ol ul').last().append('<li>'+ bul +'</li>')
				}) 
			}
		})
	})
}

// this would be a good recursive function, but I'm being lazy?
function description(description) {
	_.each(description, function(par) {
		if (typeof(par) === 'string') {
			$('#description').append('<p>'+par+'</p><br><br>');
		} else {
			$('#description').append('<ul></ul><br>');
			_.each(par, function(li) {
				if (typeof(li) === 'string') {
					$('#description').children('ul').last().append('<li>'+li+'</li>')
				} else {
					$('#description ul').last().append('<ul></ul>');
					_.each(li, function(deepLi) {
						$('#description ul').last().append('<li>'+deepLi+'</li>')
					})
				}
			})
		}
	})
}

// depricated but I'll leave it here for now
// function description(description) {
// 	_.each(description, function(par) {
// 		if (typeof(par) === 'string') {
// 			$('#description').append('<p>'+par+'</p><br><br>');
// 		} else {
// 			$('#description').append('<ul></ul><br>');
// 			_.each(par, function(li) {
// 				$('#description').children('ul').last().append('<li>'+li+'</li>')
// 			})
// 		}
// 	})
// }

// untidy way of getting rid or parens I don't want
function removeParens() {
	$('.points').each(function() {
		if ($(this).text() === '()') {
			$(this).text('');
		}
	})
}

// change color pallet based on what type of questoin
function colorDepends(type) {
	if (type.slice(0,1) === 'Q') {
		$('.color-depends').css('background', '#D87400');
	} else {
		$('.color-depends').css('background', '#909D51');
	}
}


