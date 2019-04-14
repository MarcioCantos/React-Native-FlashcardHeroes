import React from 'react';
import { View, StyleSheet } from 'react-native';
import { SubmitBtn } from '../../shared/SubmitBtn';
import { Face, QuestionTxt } from './styles';

const FaceCard = ({ flip, card }) => {
	return (
		<Face>
			<View style={{ flex: 2, justifyContent: 'center' }}>
				<QuestionTxt>{card}</QuestionTxt>
			</View>
			<View style={{ flex: 1, alignItems: 'center' }}>
				<SubmitBtn onPress={flip} style={styles.btnViewAnswer} textColor={'#fff'}>
					Show Answer
				</SubmitBtn>
			</View>
		</Face>
	);
};

const styles = StyleSheet.create({
	btnViewAnswer: {
		backgroundColor: '#464646',
		borderRadius: 5,
		padding: 10,
		width: 150
	}
});

export default FaceCard;
