import { StackNavigator } from 'react-navigation';
//Components
import DecksList from '../compoments/Decks';
import DeckNew from '../compoments/Decks/DeckNew';
import DeckPage from '../compoments/Decks/DeckPage';
import CardPage from '../compoments/Cards';
import CardNew from '../compoments/Cards/CardNew';

function optionsNavHeader(title) {
	return {
		title,
		headerTintColor: '#fff',
		headerStyle: {
			backgroundColor: '#333'
		}
	};
}

const Stack = StackNavigator({
	Home: {
		screen: DecksList,
		navigationOptions: {
			header: null
		}
	},
	DeckPage: {
		screen: DeckPage,
		navigationOptions: optionsNavHeader('Deck Details')
	},
	DeckNew: {
		screen: DeckNew,
		navigationOptions: optionsNavHeader('New Deck')
	},
	Cards: {
		screen: CardPage,
		navigationOptions: optionsNavHeader('Quiz')
	},
	CardNew: {
		screen: CardNew,
		navigationOptions: optionsNavHeader('New Card')
	}
});

export default Stack;
