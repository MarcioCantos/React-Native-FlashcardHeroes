import React, { Component } from 'react';
import { connect } from 'react-redux';
import { receiveDecks } from '../../actions';
import { LinearGradient, AppLoading } from 'expo';
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity, FlatList, Platform } from 'react-native';
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
			.then((decks) => dispatch(receiveDecks(decks)))
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
				<TouchableOpacity onPress={() => navigation.navigate('DrawerOpen')}>
					{Platform.OS === 'ios' ? (
						<Ionicons name="ios-menu" size={20} color={'#f1f1f1'} />
					) : (
						<Ionicons name="md-menu" size={20} color={'#f1f1f1'} />
					)}
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
