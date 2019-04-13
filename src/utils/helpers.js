// export function formatDate(timestamp) {
// 	const d = new Date(timestamp);
// 	// const time = d.toLocaleTimeString('en-US');
// 	return d.toLocaleDateString('pt-BR');
// }

// export function formatDeck(title) {
// 	return {
// 		id: title.trim(),
// 		title,
// 		titleBg: getRandomBg(),
// 		created: Date.now(),
// 		timeRecord: '---',
// 		timeLastest: '---',
// 		numOfCards: 0
// 	};
// }

export const COLOR_TITLE = '#464646';
export const COLOR_DETAIL = '#646464';

export const DECKPAGE_COLOR = 'deckPage';
export const DECKDETAILS_COLOR = 'deckDetails';
export const CARDPAGE_COLOR = 'cardPage';
export const QUIZPAGE_COLOR = 'quizPage';

const bgs = {
	[DECKPAGE_COLOR]: [ '#373B44', '#4286f4' ],
	[DECKDETAILS_COLOR]: [ '#ffffff', '#cccccc', '#999999' ],
	[CARDPAGE_COLOR]: [ '#000000', '#333333' ],
	[QUIZPAGE_COLOR]: [ '#ad5389', '#3c1053' ]
};

const randomKeyBg = () => {
	const keys = Object.keys(bgs);
	return keys[Math.random() * keys.length];
};

export function getBackgroundColor(name) {
	return name ? bgs[name] : bgs[randomKeyBg()];
}
