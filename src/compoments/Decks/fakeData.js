const listOfDecks = {
	JusticeLeague: {
		id: 'JusticeLeague',
		title: 'Justice League',
		titleBg: [ '#373B44', '#4286f4' ],
		coverImgUrl: 'https://images3.alphacoders.com/802/802240.jpg',
		created: 1554758252,
		timeRecord: '60s',
		timeLastest: '1m50s',
		numOfCards: 3,
		cards: [
			{
				question: 'The mighest of World?',
				answer: 'Superman'
			},
			{
				question: 'The dark knight?',
				answer: 'Batman'
			},
			{
				question: 'Who has the power of imagination?',
				answer: 'Green Lantern'
			}
		]
	},
	Gotham: {
		id: 'Gotham',
		title: 'Gotham',
		titleBg: [ '#000000', '#434343' ],
		coverImgUrl: 'https://cdn.wallpapersafari.com/40/8/ZfzU1k.jpg',
		created: 1554758456,
		timeRecord: '50s',
		timeLastest: '1m20s',
		numOfCards: 2,
		cards: [
			{
				question: 'The police commissioner of Gotham City?',
				answer: 'James Gordon'
			},
			{
				question: 'The second Robin who was killed by the Joker?',
				answer: 'Jason Todd'
			}
		]
	}
};

export default listOfDecks;
