import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components/native';
import { View, Text, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons, AntDesign, Foundation } from '@expo/vector-icons';
//Helpers
import { getBackgroundColor, COLOR_TITLE, COLOR_DETAIL, DECKDETAILS_COLOR } from '../../utils/helpers';
import { LinearGradient } from 'expo';

const DeckPage = ({ deck }) => {
	return (
		<LinearGradient colors={getBackgroundColor(DECKDETAILS_COLOR)} style={{ flex: 1 }}>
			<View style={{ flex: 2, justifyContent: 'center' }}>
				<Title>{deck.title}</Title>
				<DetailsContent>
					<MaterialCommunityIcons name="cards" size={20} color={COLOR_DETAIL} />
					{/* <Details>{deck.numOfCards} cards</Details> */}
					<Details>2 cards</Details>
				</DetailsContent>
			</View>
			<BtnStartQuiz>
				<AntDesign name="playcircleo" size={70} />
				<Text>Start Quiz</Text>
			</BtnStartQuiz>
			<View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-around' }}>
				<BtnAddCard>
					<Foundation name="page-add" size={30} color={'#464646'} />
					<Text style={{ fontSize: 12, color: '#464646' }}>Add Card</Text>
				</BtnAddCard>
				<BtnAddCard>
					<Foundation name="page-add" size={30} color={'#464646'} />
					<Text style={{ fontSize: 12, color: '#464646' }}>Add Card</Text>
				</BtnAddCard>
			</View>
		</LinearGradient>
	);
};

const mapStateToProps = (store, { navigation }) => {
	const deck = store[navigation.state.params.deckId];
	return { deck };
};

export default connect(mapStateToProps)(DeckPage);

/**
 * Styled Components
 */

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

const BtnStartQuiz = styled.TouchableOpacity`
	flex: 2;
	align-items: center;
`;

const BtnAddCard = styled.TouchableOpacity`
	flex: 1;
	justify-content: center;
	align-items: center;
	font-size: 10;
`;
