import React, { Component } from 'react';
import { connect } from 'react-redux';
import { receiveDecks } from '../../actions';
import { LinearGradient, AppLoading } from 'expo';
import { FlatList } from 'react-native';
import { fetchDeckResults } from '../../utils/api';
import { getBackgroundColor, DECKPAGE_COLOR } from '../../utils/helpers';
import Deck from './Deck';

import listOfDecks from './fakeData';

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
		const { decks } = this.props;
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
				{console.log('decks carregando', decks)}
				<FlatList data={Object.values(decks)} renderItem={this.renderItem} keyExtractor={(item) => item.id} />
			</LinearGradient>
		);
	}
}

const mapStateToProps = (store) => {
	return { decks: store };
};

export default connect(mapStateToProps)(DecksList);
