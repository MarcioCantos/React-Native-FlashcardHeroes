import React, { Component } from 'react';
import { connect } from 'react-redux';
import { receiveDecks } from '../../actions';
import { LinearGradient, AppLoading } from 'expo';
import { Feather } from '@expo/vector-icons';
import { Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import { fetchDeckResults } from '../../utils/api';
import { getBackgroundColor, DECKPAGE_COLOR } from '../../utils/helpers';
import Deck from './Deck';

class DecksList extends Component {
	state = {
		ready: false
	};

	componentDidMount() {
		const { dispatch } = this.props;
		fetchDeckResults()
			.then((decks) => {
				console.log('receiving data da api: ', decks);
				dispatch(receiveDecks(decks));
			})
			.then(() => this.setState(() => ({ ready: true })));
	}

	renderItem = ({ item }) => {
		return <Deck key={item.id} id={item.id} navigation={this.props.navigation} />;
	};

	render() {
		const { ready } = this.state;
		const { decks, navigation } = this.props;
		if (ready === false) {
			return <AppLoading />;
		}
		return (
			<LinearGradient
				style={{ flex: 1 }}
				colors={getBackgroundColor(DECKPAGE_COLOR)}
				start={[ 0, 0 ]}
				end={[ 0, 1 ]}
			>
				<TouchableOpacity style={styles.btnAddNewDeck} onPress={() => navigation.navigate('DeckNew')}>
					<Feather name="plus-square" size={20} color={'#f1f1f1'} />
					<Text style={styles.txtAddNewDeck}>New Deck</Text>
				</TouchableOpacity>
				<FlatList data={Object.values(decks)} renderItem={this.renderItem} keyExtractor={(item) => item.id} />
			</LinearGradient>
		);
	}
}

const mapStateToProps = (store) => {
	return { decks: store };
};

export default connect(mapStateToProps)(DecksList);

const styles = StyleSheet.create({
	btnAddNewDeck: {
		flexDirection: 'row',
		justifyContent: 'flex-end',
		margin: 10
	},
	txtAddNewDeck: {
		color: 'white',
		marginLeft: 10,
		marginRight: 15
	}
});
