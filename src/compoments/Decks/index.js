import React, { Component } from 'react';
import styled from 'styled-components/native';
import { LinearGradient } from 'expo';
import { View, FlatList, Text, StyleSheet } from 'react-native';
import { getBackgroundColor, DECKPAGE_COLOR } from '../../utils/helpers';
import Deck from './Deck';

import listOfDecks from './fakeData';

class DecksList extends Component {
	renderItem = ({ item }) => {
		return <Deck key={item.id} id={item.id} />;
	};
	render() {
		return (
			<LinearGradient
				style={{ flex: 1 }}
				colors={getBackgroundColor(DECKPAGE_COLOR)}
				start={[ 0, 0 ]}
				end={[ 0, 1 ]}
			>
				<FlatList
					data={Object.values(listOfDecks)}
					renderItem={this.renderItem}
					keyExtractor={(item) => item.id}
				/>
			</LinearGradient>
		);
	}
}

export default DecksList;
