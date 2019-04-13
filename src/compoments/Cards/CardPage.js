import React, { Component } from 'react';
import styled from 'styled-components/native';
import FlipCard from 'react-native-flip-card';
import { LinearGradient } from 'expo';
import { Text, StyleSheet } from 'react-native';
import { getBackgroundColor, QUIZPAGE_COLOR } from '../../utils/helpers';
import ProgressBar from './ProgressBar';
import BackCard from './Card/BackCard';
import FaceCard from './Card/FaceCard';

class CardPage extends Component {
	state = {
		corrects: 0,
		currentQuestion: 0,
		flipped: false
	};

	toggleFlip = () => {
		this.setState((state) => ({
			flipped: !state.flipped
		}));
	};

	handleAnswer = (answer) => {
		const score = answer ? 1 : 0;
		this.toggleFlip();
		this.setState(({ corrects, currentQuestion }) => ({
			corrects: corrects + score,
			currentQuestion: currentQuestion + 1
		}));
	};

	render() {
		return (
			<LinearGradient
				colors={getBackgroundColor(QUIZPAGE_COLOR)}
				style={{ flex: 1, alignItems: 'center', justifyContent: 'space-between' }}
			>
				<ProgressBar progress={50} total actual />
				<Container style={{ flex: 3 }}>
					<FlipCard
						flipHorizontal={true}
						flipVertical={false}
						friction={3}
						clickable={false}
						flip={this.state.flipped}
					>
						{/* Front face of the card */}
						<FaceCard flip={this.toggleFlip} />
						{/* Back face of the card */}
						<BackCard answer={this.handleAnswer} />
					</FlipCard>
				</Container>
				<BtnSair style={{ flex: 1 }}>
					<Text>...sair</Text>
				</BtnSair>
			</LinearGradient>
		);
	}
}

const styles = StyleSheet.create({
	btnViewAnswer: {
		backgroundColor: '#464646',
		borderRadius: 5,
		padding: 10,
		width: 150
	}
});

const Container = styled.View`
	justify-content: center;
	margin: 5px;
	width: 80%;
`;

const BtnSair = styled.TouchableOpacity`
	justify-content: flex-end;
	align-self: flex-end;
	margin-right: 50;
`;

export default CardPage;
