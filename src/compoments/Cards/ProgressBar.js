import React from 'react';
import styled from 'styled-components/native';
import { View } from 'react-native';
import { LinearGradient } from 'expo';

const ProgressBar = ({ progress }) => {
	return (
		<ProgressBarContainer>
			<View style={{ alignSelf: 'flex-end', flexDirection: 'row' }}>
				<Bar style={{ flex: 1 }}>
					<Fill progress={progress} />
				</Bar>
				<NumQuestions>1/2</NumQuestions>
			</View>
		</ProgressBarContainer>
	);
};

const ProgressBarContainer = styled.View`
	flex: 1;
	flex-direction: row;
	justify-content: center;
	align-items: flex-end;
	width: 80%;
	margin: 5px;
`;

const NumQuestions = styled.Text`
	color: white;
	margin-left: 5px;
`;

const Bar = styled.View`
	border: 1px solid rgba(255, 255, 255, 0.75);
	border-radius: 5px;
	overflow: hidden;
`;

const Fill = styled(Bar)`
	flex: 1;
	width: ${(props) => props.progress}%;
	background-color: green;
    border: 0;
    shadow-opacity: 0.75;
    shadow-radius: 5px;
    shadow-color: white;
    shadow-offset: 0px 0px;
    elevation: 2
    /* box-shadow: 3px 0px 3px 0px #FFFFFF; */
`;

export default ProgressBar;
