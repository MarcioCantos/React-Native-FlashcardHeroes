import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components/native';
import { View, Text, Alert } from 'react-native';
import { MaterialCommunityIcons, AntDesign, Foundation } from '@expo/vector-icons';
//Helpers
import { getBackgroundColor, COLOR_TITLE, COLOR_DETAIL, DECKDETAILS_COLOR } from '../../utils/helpers';
import { removeDeckEntry } from '../../utils/api';
import { removeDeck } from '../../actions';
import { LinearGradient } from 'expo';

class DeckPage extends Component {
	deleteDeck = () => {
		const { remove, goBack } = this.props;
		remove();
		goBack();
		removeDeckEntry(this.props.deck.id);
	};

	handleDeleteClick = () => {
		Alert.alert(
			`DELETE ${this.props.deck.title}`,
			'Would you like to delete this deck?',
			[
				{
					text: 'cancel',
					style: 'cancel'
				},
				{ text: 'DELETE', onPress: () => this.deleteDeck() }
			],
			{ cancelable: true }
		);
	};

	shouldComponentUpdate(nextProps) {
		return nextProps.deck !== null || typeof nextProps.deck.title === 'undefined';
	}

	render() {
		const { deck } = this.props;
		const { title, numOfCards } = deck;
		return (
			<LinearGradient colors={getBackgroundColor(DECKDETAILS_COLOR)} style={{ flex: 1 }}>
				<View style={{ flex: 2, justifyContent: 'center' }}>
					<Title>{title}</Title>
					<DetailsContent>
						<MaterialCommunityIcons name="cards" size={20} color={COLOR_DETAIL} />
						<Details>
							{numOfCards} {numOfCards > 1 ? 'cards' : 'card'}
						</Details>
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
					<BtnRemoveDeck onPress={this.handleDeleteClick}>
						<AntDesign name="delete" size={20} color={'brown'} />
						<Text style={{ fontSize: 10, color: 'brown' }}>Delete Deck</Text>
					</BtnRemoveDeck>
				</View>
			</LinearGradient>
		);
	}
}

const mapStateToProps = (store, { navigation }) => {
	const deck = store[navigation.state.params.deckId];
	return { deck };
};

const mapDispatchToProps = (dispatch, { navigation }) => {
	const { deckId } = navigation.state.params;

	return {
		remove: () => dispatch(removeDeck(deckId)),
		goBack: () => navigation.goBack()
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(DeckPage);

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
`;

const BtnRemoveDeck = styled(BtnAddCard)`
	color: red;
`;
