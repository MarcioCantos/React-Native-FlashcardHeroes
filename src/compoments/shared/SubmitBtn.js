import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export function SubmitBtn({ onPress, textColor, textSize, ...props }) {
	const styles = StyleSheet.create({
		textStyle: {
			fontSize: textSize ? textSize : 18,
			textAlign: 'center',
			color: textColor ? textColor : '#444'
		}
	});

	return (
		<TouchableOpacity onPress={onPress} {...props}>
			<Text style={styles.textStyle}>{props.children}</Text>
		</TouchableOpacity>
	);
}
