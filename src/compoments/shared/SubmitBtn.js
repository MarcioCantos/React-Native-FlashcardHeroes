import React from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';

export function SubmitBtn({ onPress, textColor, ...props }) {
	return (
		<TouchableOpacity onPress={onPress} {...props}>
			<Text style={{ fontSize: 18, textAlign: 'center', color: textColor }}>{props.children}</Text>
		</TouchableOpacity>
	);
}
