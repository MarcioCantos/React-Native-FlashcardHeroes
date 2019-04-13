import React from 'react';
import styled from 'styled-components/native';
import { View, Text, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons, AntDesign, Foundation } from '@expo/vector-icons';
//Helpers
import { getBackgroundColor, COLOR_TITLE, COLOR_DETAIL, DECKPAGE_COLOR, DECKDETAILS_COLOR } from '../../utils/helpers';
import { SubmitBtn } from '../shared/SubmitBtn';

import listOfDecks from './fakeData';
import { LinearGradient } from 'expo';

const DeckPage = (props) => {
	const deck = listOfDecks['Gotham'];

	return (
		<LinearGradient colors={getBackgroundColor(DECKDETAILS_COLOR)} style={{ flex: 1 }}>
			<View style={{ flex: 2, justifyContent: 'center' }}>
				<Title>{deck.title}</Title>
				<DetailsContent>
					<MaterialCommunityIcons name="cards" size={20} color={COLOR_DETAIL} />
					<Details>{deck.numOfCards} cards</Details>
				</DetailsContent>
			</View>
			<TouchableOpacity style={{ flex: 2, alignItems: 'center' }}>
				<AntDesign name="playcircleo" size={70} />
				<Text>Start Quiz</Text>
			</TouchableOpacity>
			<TouchableOpacity
				style={{
					flex: 1,
					justifyContent: 'center',
					alignItems: 'center',
					fontSize: 10,
					borderColor: 'green'
				}}
			>
				<Foundation name="page-add" size={30} color={'#464646'} />
				<Text style={{ fontSize: 12, color: '#464646' }}>Add Card</Text>
			</TouchableOpacity>
		</LinearGradient>
	);
};

const Texts = styled.Text`
	color: ${COLOR_TITLE};
	text-align: center;
`;

const Title = styled(Texts)`
	font-size:48px;
`;

const DetailsContent = styled.View`
	flex-direction: row;
	justify-content: center;
	align-items: center;
`;
const Details = styled(Texts)`
	font-size: 18px;
	margin-left: 10px;
	color: ${COLOR_DETAIL};
`;

export default DeckPage;
