import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { View, Text, TextInput, StyleSheet, KeyboardAvoidingView } from 'react-native';
import { LinearGradient } from 'expo';
import styled from 'styled-components/native';
import { submitDeckEntry } from '../../utils/api';
import { getBackgroundColor, red, deckColor } from '../../utils/helpers';
import { SubmitBtn } from '../shared/SubmitBtn';
import { addDeck } from '../../actions';

class DeckNew extends Component {
	state = {
		deck: {
			id: '',
			title: '',
			numOfCards: 0,
			questions: []
		},
		msg: ''
	};

	handleInputChange = (input) => {
		//remove white space between words
		const id = input.replace(/\s+/g, '');
		this.setState((state) => ({
			...state,
			deck: {
				...state.deck,
				id,
				title: input
			},
			msg: ''
		}));
	};

	submit = () => {
		const key = this.state.deck.id;
		const entry = this.state.deck;

		//Verify empty title
		if (this.state.deck.title === '') {
			return this.setState(() => ({
				msg: 'You must provide a valid title to your deck.'
			}));
		}

		//verify if Deck already exists in Store
		if (typeof this.props.decks[key] !== 'undefined') {
			return this.setState(() => ({
				msg: 'This title is in use. Please choose another.'
			}));
		}

		this.props.dispatch(
			addDeck({
				[key]: entry
			})
		);
		this.props.navigation.goBack();

		//Send the newest Deck to API (AsyncStorage)
		submitDeckEntry({ key, entry });
	};

	render() {
		return (
			<LinearGradient colors={getBackgroundColor(deckColor)} style={{ flex: 1 }}>
				<KeyboardAvoidingView behavior="padding" style={styles.container}>
					<View style={styles.blcForm}>
						<Question>Get a nice title!</Question>
						<InputContainer>
							<Input
								value={this.state.deck.title}
								onChangeText={this.handleInputChange}
								placeholder={'My wonderful deck title is...'}
							/>
						</InputContainer>
						<MsgError>{this.state.msg}</MsgError>
					</View>
					<View style={{ flex: 1 }}>
						<SubmitBtn style={styles.btnSubmit} onPress={this.submit}>
							Create Deck
						</SubmitBtn>
					</View>
				</KeyboardAvoidingView>
			</LinearGradient>
		);
	}
}

function mapStateToProps(state) {
	return {
		decks: state
	};
}

export default connect(mapStateToProps)(DeckNew);

/**
 * PropTypes
 */
DeckNew.propTypes = {
	navigation: PropTypes.shape({
		navigate: PropTypes.func
	}).isRequired
};

/**
 * Styled Components
 */

const Question = styled.Text`
	justify-content: center;
	align-content: center;
	text-align: center;
	font-size: 24;
	color: white;
	font-weight: bold;
`;

const Input = styled.TextInput`
	font-size: 21;
	color: #ffffff;
	padding: 5px 10px;
	width: 300;
`;

const InputContainer = styled.View`
	margin-top: 150;
	border-bottom-color: #ccc;
	border-bottom-width: 1px;
`;

const MsgError = styled.Text`
	color: ${red};
	margin-right: 10;
`;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'space-between',
		alignItems: 'center',
		margin: 25
	},
	blcForm: {
		flex: 3,
		justifyContent: 'center'
	},
	btnSubmit: {
		alignItems: 'center',
		textAlign: 'center',
		fontSize: 50,
		fontWeight: '700',
		marginTop: 15,
		padding: 10,
		borderRadius: 5,
		backgroundColor: 'white',
		width: 100
	}
});
