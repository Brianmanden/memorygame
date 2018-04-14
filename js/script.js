// TODO
// Flip cards
// Click events
// https://bootsnipp.com/snippets/Qbgxm

const app = (function(){
	init = () => {
		const cardContainer = document.querySelectorAll('#container');
		let cardsArray = [];

		// Populate cardsArray with images
		for(let i = 0; i < 8; i++){
			cardsArray[i * 2] = `./assets/dog${i}.jpg`;
			cardsArray[i * 2 + 1] = `./assets/dog${i}.jpg`;
		}

		// Shuffle the images
		const cards = shuffle(cardsArray);
		// Add shuffled images to cardContainer
		addCards(cardContainer, cards);
	}

	addCards = (container, cards) => {
		for(let i = 0; i <= 15; i++){
			$(container).append(`
				<div class="card border border-primary">
					<img class="card-img-top" src="${cards[i]}">
				</div>
			`);
		}
	}

	// Shuffles array in place. ES6 version
	// @param {Array} a items An array containing the items.
	// Source: https://stackoverflow.com/questions/6274339/how-can-i-shuffle-an-array
	shuffle = (a) => {
		for (let i = a.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[a[i], a[j]] = [a[j], a[i]];
		}
		return a;
	}

	return {
		init: init
	}
})();

document.addEventListener('DOMContentLoaded', () => {
	app.init();
});