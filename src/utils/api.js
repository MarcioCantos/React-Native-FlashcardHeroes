import { AsyncStorage } from 'react-native';

const FLASHCARD_STORAGE_KEY = '@FlashcardHeroes:flashcard';

export function fetchDeckResults() {
	return AsyncStorage.getItem(FLASHCARD_STORAGE_KEY).then((results) => JSON.parse(results));
}

export function submitDeckEntry({ key, entry }) {
	return AsyncStorage.mergeItem(
		FLASHCARD_STORAGE_KEY,
		JSON.stringify({
			[key]: entry
		})
	);
}

export function removeDeckEntry(key) {
	return AsyncStorage.getItem(FLASHCARD_STORAGE_KEY).then((results) => {
		const { [key]: del, ...data } = JSON.parse(results);
		AsyncStorage.setItem(FLASHCARD_STORAGE_KEY, JSON.stringify(data));
	});
}

export function submitCardEntry({ key, entry }) {
	return AsyncStorage.getItem(FLASHCARD_STORAGE_KEY).then((results) => {
		const data = JSON.parse(results);
		data[key] = {
			...data[key],
			question: {
				...data[key].question,
				entry
			}
		};
		AsyncStorage.setItem(FLASHCARD_STORAGE_KEY, JSON.stringify(data));
	});
}

export function removeCardEntry({ key, keyChild }) {
	return AsyncStorage.getItem(FLASHCARD_STORAGE_KEY).then((results) => {
		const data = JSON.parse(results);
		data[key]['questions'][keyChild] = undefined;
		delete data[key][keyChild];
		AsyncStorage.setItem(FLASHCARD_STORAGE_KEY, JSON.stringify(data));
	});
}
