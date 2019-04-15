import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import store from './src/store';
import Stack from './src/hoc/nav';
import MyStatusBar from './src/hoc/StatusBar';

export default class App extends React.Component {
	render() {
		return (
			<Provider store={store}>
				<View style={{ flex: 1 }}>
					<MyStatusBar backgroundColor={'#333333'} barStyle="light-content" />
					<Stack />
				</View>
			</Provider>
		);
	}
}
