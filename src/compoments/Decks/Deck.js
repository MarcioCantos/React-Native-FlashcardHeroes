import React from 'react';
import { View, Text, Image } from 'react-native';
import styled from 'styled-components/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
//Helpers
import { formatDate, getRandomBg, COLOR_TITLE, COLOR_DETAIL } from '../../utils/helpers';
//Components
import listOfDecks from './fakeData';

const Deck = ({ id }) => {
	const deck = listOfDecks[id];
	return (
		<DeckBox>
			<Title>{deck.title}</Title>
			<View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
				<MaterialCommunityIcons name="cards" size={20} color={COLOR_DETAIL} />
				<Details>{deck.numOfCards} cards</Details>
			</View>
		</DeckBox>
	);
};

/**
 * Styled Components
 */

const DeckBox = styled.View`
	padding-bottom: 10px;
	margin: 5px 10px;
	align-items: center;
	border-radius: 5px;
	background-color: white;
`;

const Title = styled.Text`
	font-size: 24px;
	font-weight: bold;
	color: ${COLOR_TITLE};
	border-radius: 5px;
`;

const Details = styled.Text`
	font-size: 18px;
	color: ${COLOR_DETAIL};
	margin-left: 5px;
`;

const Bold = ({ children }) => <Text style={{ fontWeight: 'bold' }}>{children}</Text>;
const Italic = ({ children }) => <Text style={{ fontStyle: 'italic' }}>{children}</Text>;

export default Deck;
