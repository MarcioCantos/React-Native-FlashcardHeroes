import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet, KeyboardAvoidingView } from 'react-native';
import { LinearGradient } from 'expo';
import styled from 'styled-components/native';
import { getBackgroundColor, CARDPAGE_COLOR } from '../../utils/helpers';
import { SubmitBtn } from '../shared/SubmitBtn';

export default class CardNew extends Component {
	state = {
		question: '',
		answer: ''
	};

	handleInputChange = (input, name) => {
		this.setState(() => ({
			[name]: input
		}));
	};

	submit() {}

	render() {
		return (
			<LinearGradient colors={getBackgroundColor(CARDPAGE_COLOR)} style={{ flex: 1 }}>
				<KeyboardAvoidingView behavior="padding" style={styles.container}>
					<View style={styles.blcForm}>
						<InputContainer>
							<Input
								value={this.state.question}
								onChangeText={(e) => this.handleInputChange(e, 'question')}
								placeholder={'What question would you like to ask?'}
							/>
						</InputContainer>
						<InputContainer style={{ marginTop: 20 }}>
							<Input
								value={this.state.answer}
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
		);
	}
}

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
