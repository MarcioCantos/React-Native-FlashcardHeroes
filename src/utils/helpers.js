export const darkGray = '#464646';
export const gray = '#646464';
export const red = 'brown';

export const deckColor = 'deckPage';
export const deckDetailsColor = 'deckDetails';
export const cardColor = 'cardPage';
export const quizColor = 'quizPage';

const bgs = {
	[deckColor]: [ '#373B44', '#4286f4' ],
	[deckDetailsColor]: [ '#ffffff', '#cccccc', '#999999' ],
	[cardColor]: [ '#000000', '#333333' ],
	[quizColor]: [ '#ad5389', '#3c1053' ]
};

const randomKeyBg = () => {
	const keys = Object.keys(bgs);
	return keys[Math.random() * keys.length];
};

export function getBackgroundColor(name) {
	return name ? bgs[name] : bgs[randomKeyBg()];
}
