import React, { Component } from 'react';
import styled from 'styled-components/native';
import FlipCard from 'react-native-flip-card';
import { LinearGradient } from 'expo';
import { Text, Alert } from 'react-native';
import { getBackgroundColor, QUIZPAGE_COLOR } from '../../utils/helpers';
import ProgressBar from './ProgressBar';
import BackCard from './Card/BackCard';
import FaceCard from './Card/FaceCard';

class CardPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			corrects: 0,
			currentQuestion: 1,
			totalQuestions: props.navigation.state.params.questions.length,
			progress: 0,
			flipped: false
		};
	}

	toggleFlip = () => {
		this.setState((state) => ({
			flipped: !state.flipped
		}));
	};

	handleAnswer = (answer) => {
		const { corrects, currentQuestion, totalQuestions } = this.state;

		const score = answer ? corrects + 1 : corrects;
		const answered = currentQuestion > totalQuestions ? currentQuestion : currentQuestion + 1;

		this.setState(() => ({
			corrects: score,
			currentQuestion: answered,
			progress: Math.round((answered - 1) * 100 / totalQuestions) //(-1) because % starts at 0
		}));

		this.toggleFlip();
	};

	handleGiveUpClick = () => {
		const { name } = this.props.navigation.state.params;

		Alert.alert(
			`GIVE UP!`,
			`Would you like to quit ${name}'s Quiz?`,
			[
				{
					text: `No... stay here`,
					style: 'cancel'
				},
				{ text: `Yes! I'll give up!`, onPress: () => this.props.navigation.goBack() }
			],
			{ cancelable: true }
		);
	};

	render() {
		const { name, questions } = this.props.navigation.state.params;
		const { progress, currentQuestion, totalQuestions } = this.state;
		console.log('progress: ', progress);
		const { question, answer } = questions[currentQuestion - 1];

		return (
			<LinearGradient
				colors={getBackgroundColor(QUIZPAGE_COLOR)}
				style={{ flex: 1, alignItems: 'center', justifyContent: 'space-between' }}
			>
				<ContainerTitle>
					<Title>{name}</Title>
				</ContainerTitle>
				<ProgressBar progress={progress} total={totalQuestions} current={currentQuestion} />
				<Container style={{ flex: 4 }}>
					<FlipCard
						flipHorizontal={true}
						flipVertical={false}
						friction={3}
						clickable={false}
						flip={this.state.flipped}
					>
						{/* Front face of the card */}
						<FaceCard flip={this.toggleFlip} card={question} />
						{/* Back face of the card */}
						<BackCard handleAnswer={this.handleAnswer} card={answer} />
					</FlipCard>
				</Container>
				<Footer>
					<BtnSair onPress={this.handleGiveUpClick}>
						<Text>Give Up!</Text>
					</BtnSair>
				</Footer>
			</LinearGradient>
		);
	}
}

const ContainerTitle = styled.View`
	flex: 1;
	justify-content: center;
	align-content: center;
`;

const Title = styled.Text`
	font-size: 28;
	font-weight: bold;
	color: white;
	text-align: center;
`;

const Container = styled.View`
	justify-content: flex-start;
	margin: 5px;
	width: 80%;
`;

const Footer = styled.View`
	flex: 1;
	align-self: flex-end;
	justify-content: center;
	margin-right: 50;
`;

const BtnSair = styled.TouchableOpacity`
	justify-content: center;
	align-self: flex-end;
	padding: 5px;
	background-color: rgba(150, 150, 150, 0.5);
	border: 1px solid #999;
	border-radius: 3px;
`;

export default CardPage;
