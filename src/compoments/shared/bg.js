export const DECKPAGE_COLOR = 'deckPage';
export const CARDPAGE_COLOR = 'cardPage';

const bgs = {
	[DECKPAGE_COLOR]: [ '#373B44', '#4286f4' ],
	[CARDPAGE_COLOR]: [ '#000000', '#333333' ]
};

const randomKey = () => {
	const keys = Object.keys(bgs);
	return keys[Math.random() * keys.length];
};

export function getBackgroundColor(name) {
	return name ? bgs[name] : bgs[randomKey()];
}
