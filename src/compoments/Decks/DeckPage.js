import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components/native';
import { View, Text, Alert } from 'react-native';
import { MaterialCommunityIcons, AntDesign, Foundation } from '@expo/vector-icons';
//Helpers
import { getBackgroundColor, red, COLOR_TITLE, COLOR_DETAIL, DECKDETAILS_COLOR } from '../../utils/helpers';
import { removeDeckEntry } from '../../utils/api';
import { removeDeck } from '../../actions';
import { LinearGradient } from 'expo';

class DeckPage extends Component {
	shouldComponentUpdate(nextProps) {
		return typeof nextProps.deck !== 'undefined';
	}

	startQuiz = () => {
		const { deck, navigation } = this.props;
		navigation.navigate('Cards', { questions: deck.questions, name: deck.title });
	};

	deleteDeck = (id) => {
		const { remove, goBack } = this.props;
		console.log('delete deck: ', this.props);
		remove();
		goBack();
		removeDeckEntry(id);
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
				{ text: 'DELETE', onPress: () => this.deleteDeck(this.props.deck.id) }
			],
			{ cancelable: true }
		);
	};

	addNewCard = () => {
		const { deck, navigation } = this.props;
		navigation.navigate('CardNew', { deckId: deck.id });
	};

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
				<BtnStartQuiz onPress={this.startQuiz}>
					<AntDesign name="playcircleo" size={70} />
					<Text>Start Quiz</Text>
				</BtnStartQuiz>
				<View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-around' }}>
					<BtnAddCard onPress={this.addNewCard}>
						<Foundation name="page-add" size={30} color={'#464646'} />
						<Text style={{ fontSize: 12, color: '#464646' }}>Add Card</Text>
					</BtnAddCard>
					<BtnRemoveDeck onPress={this.handleDeleteClick}>
						<AntDesign name="delete" size={20} color={red} />
						<Text style={{ fontSize: 10, color: red }}>Delete Deck</Text>
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
