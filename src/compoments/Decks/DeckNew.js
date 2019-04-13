import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet, KeyboardAvoidingView } from 'react-native';
import { LinearGradient } from 'expo';
import styled from 'styled-components/native';
import { SubmitBtn } from '../shared/SubmitBtn';
import { getBackgroundColor, DECKPAGE_COLOR } from '../../utils/helpers';
import { submitDeckEntry } from '../../utils/api';
import { connect } from 'react-redux';
import { addDeck } from '../../actions';

class DeckNew extends Component {
	state = {
		id: '',
		title: ''
	};

	handleInputChange = (input) => {
		this.setState(() => ({
			id: input.trim(),
			title: input
		}));
	};

	submit() {
		const key = this.state.id;
		const entry = this.state;

		this.props.dispatch(
			addDeck({
				[key]: entry
			})
		);

		submitDeckEntry({ key, entry });
	}

	render() {
		return (
			<LinearGradient colors={getBackgroundColor(DECKPAGE_COLOR)} style={{ flex: 1 }}>
				<KeyboardAvoidingView behavior="padding" style={styles.container}>
					<View style={styles.blcForm}>
						<Question>Get a nice title!</Question>
						<InputContainer style={{ marginTop: 150 }}>
							<Input
								value={this.state.title}
								onChangeText={this.handleInputChange}
								placeholder={'My wonderful deck title is...'}
							/>
						</InputContainer>
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

const Question = styled.Text`
	justify-content: center;
	align-content: center;
	text-align: center;
	font-size: 24px;
	color: white;
	font-weight: bold;
`;

const Input = styled.TextInput`
	font-size: 21px;
	color: #ffffff;
	padding: 5px 10px;
	width: 300px;
`;

const InputContainer = styled.View`
	border-bottom-color: #ccc;
	border-bottom-width: 1px;
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

function mapStateToProps(state) {
	console.log('state: ', state);

	return {
		state
	};
}

export default connect(mapStateToProps)(DeckNew);
