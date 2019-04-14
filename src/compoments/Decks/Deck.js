import React from 'react';
import { connect } from 'react-redux';
import { View, Text, Image } from 'react-native';
import styled from 'styled-components/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
//Helpers
import { COLOR_TITLE, COLOR_DETAIL } from '../../utils/helpers';

const Deck = ({ id, deck, navigation }) => {
	const goToDeckPage = () => {
		navigation.navigate('DeckPage', { deckId: id, name: deck.title });
	};

	const { title, numOfCards } = deck;

	return (
		<DeckBox onPress={goToDeckPage}>
			<Title>{title}</Title>
			<View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
				<MaterialCommunityIcons name="cards" size={20} color={COLOR_DETAIL} />
				<Details>
					{numOfCards} {numOfCards > 1 ? 'cards' : 'card'}
				</Details>
			</View>
		</DeckBox>
	);
};

const mapStateToProps = (store, { id }) => {
	const deck = store[id];
	console.log('store em deck: ', deck);
	return { deck };
};

export default connect(mapStateToProps)(Deck);

/**
 * Styled Components
 */

const DeckBox = styled.TouchableOpacity`
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
