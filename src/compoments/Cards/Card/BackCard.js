import React from 'react';
import { View, StyleSheet } from 'react-native';
import { SubmitBtn } from '../../shared/SubmitBtn';
import { Back, AnswerTxt } from './styles';

const BackCard = ({ handleAnswer, card }) => {
	handleCorrectAnswer = () => {
		return handleAnswer(true);
	};

	handleWrongAnswer = () => {
		return handleAnswer(false);
	};

	return (
		<Back>
			<View style={{ flex: 2, justifyContent: 'center' }}>
				<AnswerTxt>{card}</AnswerTxt>
			</View>
			<View style={styles.btnContent}>
				<SubmitBtn onPress={handleCorrectAnswer} textColor={'#444'} style={styles.btnCorrect}>
					Correct
				</SubmitBtn>
				<SubmitBtn onPress={handleWrongAnswer} textColor={'#fff'} style={styles.btnWrong}>
					Incorrect
				</SubmitBtn>
			</View>
		</Back>
	);
};

const styles = StyleSheet.create({
	btnContent: {
		flex: 1,
		justifyContent: 'space-around',
		alignItems: 'center'
	},
	btnCorrect: {
		backgroundColor: '#fff',
		padding: 10,
		width: 150,
		borderRadius: 5
	},
	btnWrong: {
		backgroundColor: '#222',
		padding: 10,
		width: 150,
		borderRadius: 5
	}
});

export default BackCard;
