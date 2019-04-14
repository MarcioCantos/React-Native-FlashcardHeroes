import { RECEIVE_DECKS, ADD_DECK, ADD_CARD, REMOVE_DECK } from '../actions';

function decks(state = {}, action) {
	switch (action.type) {
		case RECEIVE_DECKS:
			return { ...action.decks };

		case ADD_DECK:
			return {
				...state,
				...action.deck
			};

		case REMOVE_DECK:
			const { [action.id]: del, ...newDeckState } = state;
			return {
				...newDeckState
			};

		case ADD_CARD:
			const { deck, card } = action;
			return {
				...state,
				[deck]: {
					...state[deck],
					numOfCards: state[deck].numOfCards + 1,
					questions: state[deck].questions.concat(card)
				}
			};

		default:
			return state;
	}
}

export default decks;
