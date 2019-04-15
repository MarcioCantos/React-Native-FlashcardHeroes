import React from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet } from 'react-native';
import { SubmitBtn } from '../../shared/SubmitBtn';
import { Result, ResultTxt, ScoreTxt } from './styles';

const ResultCard = ({ total, corrects, restart, goBack }) => {
	const finalScore = Math.round(corrects / total * 100);

	const greatz = () => {
		if (finalScore === 0) return 'Are you kidding me? \n\n 😑';
		if (finalScore < 50) return 'Ops... \nYou should study a little bit...\n\n 🤔';
		if (finalScore < 70) return 'Almost there!\n Keep this way!\n\n 😉';
		if (finalScore < 99) return 'Awesome! \n You are almost a genius!\n\n 😘';

		return 'Godlike!\n You are the best! \n\n🤩';
	};

	return (
		<Result>
			<View style={{ flex: 2, justifyContent: 'center' }}>
				<ResultTxt>{greatz()}</ResultTxt>
				<ScoreTxt>
					You scored {corrects} of {total}
				</ScoreTxt>
			</View>
			<View style={{ flex: 1, alignItems: 'center', justifyContent: 'space-around' }}>
				<SubmitBtn onPress={restart} style={styles.btnPlayAgain} textSize={18}>
					Play Again!
				</SubmitBtn>
				<SubmitBtn onPress={goBack} style={styles.btnGoHome} textColor={'#999'} textSize={12}>
					Back to Deck Page
				</SubmitBtn>
			</View>
		</Result>
	);
};

export default ResultCard;

/**
 * PropTypes
 */
ResultCard.propTypes = {
	total: PropTypes.number.isRequired,
	corrects: PropTypes.number.isRequired,
	restart: PropTypes.func.isRequired,
	goBack: PropTypes.func.isRequired
};

/**
 * Styled Components
 */

const styles = StyleSheet.create({
	btnPlayAgain: {
		backgroundColor: '#ffffff',
		borderRadius: 5,
		padding: 10,
		width: 150
	},
	btnGoHome: {
		backgroundColor: 'rgba(0,0,0, 0.5)',
		borderRadius: 5,
		borderWidth: 1,
		padding: 10,
		width: 150
	}
});
