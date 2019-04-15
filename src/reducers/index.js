import { RECEIVE_DECKS, ADD_DECK, ADD_CARD, REMOVE_DECK } from '../actions';

function decks(state = {}, action) {
	switch (action.type) {
		case RECEIVE_DECKS:
			console.log('receive reduce', action);
			return { ...action.payload };

		case ADD_DECK:
			console.log('add reduce', action);
			return {
				...state,
				...action.payload
			};

		case REMOVE_DECK:
			const { [action.payload]: del, ...newDeckState } = state;
			return {
				...newDeckState
			};

		case ADD_CARD:
			const { deck, card } = action.payload;
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
