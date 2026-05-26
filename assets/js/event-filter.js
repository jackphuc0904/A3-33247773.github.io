// Adapted from W3Schools "How To Filter Elements"
// Source: https://www.w3schools.com/howto/howto_js_filter_elements.asp

filterSelection("all");

function filterSelection(category) {
	var cards;
	var i;

	cards = document.getElementsByClassName("session-card");

	if (category == "all") {
		category = "";
	}

	for (i = 0; i < cards.length; i++) {
		w3RemoveClass(cards[i], "show");

		if (cards[i].className.indexOf(category) > -1) {
			w3AddClass(cards[i], "show");
		}
	}

	updateFilterMessage(category);
}

function w3AddClass(element, name) {
	var i;
	var currentClasses;
	var newClasses;

	currentClasses = element.className.split(" ");
	newClasses = name.split(" ");

	for (i = 0; i < newClasses.length; i++) {
		if (currentClasses.indexOf(newClasses[i]) == -1) {
			element.className += " " + newClasses[i];
		}
	}
}

function w3RemoveClass(element, name) {
	var i;
	var currentClasses;
	var removeClasses;

	currentClasses = element.className.split(" ");
	removeClasses = name.split(" ");

	for (i = 0; i < removeClasses.length; i++) {
		while (currentClasses.indexOf(removeClasses[i]) > -1) {
			currentClasses.splice(currentClasses.indexOf(removeClasses[i]), 1);
		}
	}

	element.className = currentClasses.join(" ");
}

function updateFilterMessage(category) {
	var message;
	var visibleCards;
	var count;

	message = document.getElementById("filter-status");
	visibleCards = document.getElementsByClassName("show");
	count = visibleCards.length;

	if (category == "") {
		message.innerHTML = "Showing all " + count + " upcoming sessions.";
	} else if (category == "training") {
		message.innerHTML = "Showing " + count + " training session.";
	} else if (category == "game") {
		message.innerHTML = "Showing " + count + " friendly game.";
	} else if (category == "social") {
		message.innerHTML = "Showing " + count + " social event.";
	}
}

var buttonContainer = document.getElementById("filter-buttons");
var buttons = buttonContainer.getElementsByClassName("filter-button");

for (var i = 0; i < buttons.length; i++) {
	buttons[i].addEventListener("click", function() {
		var current;

		current = document.getElementsByClassName("is-active");

		if (current.length > 0) {
			current[0].className = current[0].className.replace(" is-active", "");
		}

		this.className += " is-active";
	});
}