import React from 'react';
import PropTypes from 'prop-types';
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
			<View style={styles.blcAnswer}>
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

export default BackCard;

/**
 * PropTypes
 */

BackCard.propTypes = {
	card: PropTypes.string.isRequired
};

/**
 * StylesSheet
 */

const styles = StyleSheet.create({
	blcAnswer: {
		flex: 2,
		justifyContent: 'center'
	},
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
