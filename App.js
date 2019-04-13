import React from 'react';
import { View } from 'react-native';
//Components
import DecksList from './src/compoments/Decks';
import DeckNew from './src/compoments/Decks/DeckNew';
import DeckPage from './src/compoments/Decks/DeckPage';
import CardPage from './src/compoments/Cards/CardPage';
import CardNew from './src/compoments/Cards/CardNew';

export default class App extends React.Component {
	render() {
		return (
			<View style={{ flex: 1 }}>
				<DeckNew />
				{/* <DecksList /> */}
				{/* <CardPage /> */}
				{/* <CardNew /> */}
				{/* <DeckPage /> */}
			</View>
		);
	}
}
