import React from 'react';
import { View, StatusBar } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { FontAwesome } from '@expo/vector-icons';
import { Constants } from 'expo';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducer from './src/reducers';
import logger from './src/middlewares/logger';
//Components
import DecksList from './src/compoments/Decks';
import DeckNew from './src/compoments/Decks/DeckNew';
import DeckPage from './src/compoments/Decks/DeckPage';
import CardPage from './src/compoments/Cards/CardPage';
import CardNew from './src/compoments/Cards/CardNew';

function MyStatusBar({ backgroundColor, ...props }) {
	return (
		<View style={{ backgroundColor, height: Constants.statusBarHeight }}>
			<StatusBar translucent backgroundColor={backgroundColor} {...props} />
		</View>
	);
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
	CardPage: {
		screen: CardPage,
		navigationOptions: optionsNavHeader('Quiz')
	},
	CardNew: {
		screen: CardNew,
		navigationOptions: optionsNavHeader('New Card')
	}
});

function optionsNavHeader(title) {
	return {
		title,
		headerTintColor: '#fff',
		headerStyle: {
			backgroundColor: '#333'
		}
	};
}

// const Stack = createAppContainer(StackNavigator);

export default class App extends React.Component {
	render() {
		return (
			<Provider store={createStore(reducer, applyMiddleware(logger))}>
				<View style={{ flex: 1 }}>
					<MyStatusBar backgroundColor={'#333333'} barStyle="light-content" />
					<Stack />
				</View>
			</Provider>
		);
	}
}
