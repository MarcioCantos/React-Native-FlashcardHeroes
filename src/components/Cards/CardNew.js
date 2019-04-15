import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { View, StyleSheet, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView } from 'react-native';
import { LinearGradient } from 'expo';
import styled from 'styled-components/native';
import { submitCardEntry } from '../../utils/api';
import { getBackgroundColor, cardColor } from '../../utils/helpers';
import { addCard } from '../../actions';
import { SubmitBtn } from '../shared/SubmitBtn';

class CardNew extends PureComponent {
	state = {
		card: {
			question: '',
			answer: ''
		}
	};

	handleInputChange = (input, name) => {
		this.setState((state) => ({
			...state,
			card: {
				...state.card,
				[name]: input
			}
		}));
	};

	submit = () => {
		const { deckId } = this.props;
		const { card } = this.state;

		//add into redux store
		this.props.dispatch(addCard(deckId, card));
		this.props.navigation.goBack();

		submitCardEntry({
			key: deckId,
			entry: card
		});
	};

	render() {
		const { card } = this.state;
		return (
			<TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
				<LinearGradient colors={getBackgroundColor(cardColor)} style={{ flex: 1 }}>
					<KeyboardAvoidingView behavior="padding" style={styles.container}>
						<View style={styles.blcForm}>
							<InputContainer>
								<Input
									value={card.question}
									onChangeText={(e) => this.handleInputChange(e, 'question')}
									placeholder={'What question would you like to ask?'}
								/>
							</InputContainer>
							<InputContainer style={{ marginTop: 20 }}>
								<Input
									value={card.answer}
									onChangeText={(e) => this.handleInputChange(e, 'answer')}
									placeholder={'And the answer is...'}
								/>
							</InputContainer>
						</View>
						<View style={{ flex: 1 }}>
							<SubmitBtn style={styles.btnSubmit} onPress={this.submit}>
								Add Card
							</SubmitBtn>
						</View>
					</KeyboardAvoidingView>
				</LinearGradient>
			</TouchableWithoutFeedback>
		);
	}
}

function mapStateToProps(store, { navigation }) {
	const { deckId } = navigation.state.params;
	return {
		deckId
	};
}

export default connect(mapStateToProps)(CardNew);

/**
 * PropTypes
 */
CardNew.propTypes = {
	navigation: PropTypes.shape({
		navigate: PropTypes.func
	}).isRequired
};

/**
 * Styled Components
 */

const Input = styled.TextInput`
	font-size: 16px;
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
		alignItems: 'center'
	},
	blcForm: {
		flex: 3,
		justifyContent: 'center'
	},
	btnSubmit: {
		alignItems: 'center',
		fontSize: 16,
		fontWeight: '700',
		marginTop: 15,
		padding: 10,
		borderRadius: 5,
		backgroundColor: 'rgba(200, 200, 200, 0.8)',
		width: 100
	}
});
