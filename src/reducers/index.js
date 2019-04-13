import { RECEIVE_DECKS, ADD_DECK, ADD_CARD, REMOVE_DECK, REMOVE_CARD } from '../actions';

function decks(state = {}, action) {
	switch (action.type) {
		case RECEIVE_DECKS:
			return { ...action.decks };

		case ADD_DECK:
			return {
				...state,
				...action.deck
			};

		case ADD_CARD:
			const { deck, card } = action;
			return {
				...state,
				[deck]: {
					...state.deck[deck],
					question: {
						...state.deck[deck].question,
						card
					}
				}
			};
		default:
			return state;
	}
}

export default decks;
