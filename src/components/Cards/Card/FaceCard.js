import React from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet } from 'react-native';
import { SubmitBtn } from '../../shared/SubmitBtn';
import { Face, QuestionTxt } from './styles';

const FaceCard = ({ flip, card }) => {
	return (
		<Face>
			<View style={styles.blcQuestion}>
				<QuestionTxt>{card}</QuestionTxt>
			</View>
			<View style={styles.blcButtom}>
				<SubmitBtn onPress={flip} style={styles.btnViewAnswer} textColor={'#fff'}>
					Show Answer
				</SubmitBtn>
			</View>
		</Face>
	);
};

export default FaceCard;

/**
 * PropTypes
 */

FaceCard.propTypes = {
	card: PropTypes.string.isRequired,
	flip: PropTypes.func.isRequired
};

/**
 * StylesSheet
 */

const styles = StyleSheet.create({
	blcQuestion: {
		flex: 2,
		justifyContent: 'center'
	},
	blcButtom: {
		flex: 1,
		alignItems: 'center'
	},
	btnViewAnswer: {
		backgroundColor: '#464646',
		borderRadius: 5,
		padding: 10,
		width: 150
	}
});
