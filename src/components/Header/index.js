import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import Logo from '../../../assets/Nubank_Logo.png';

export default function Header() {
	return (
		<View style={styles.container}>
			<View style={styles.top}>
				<Image source={Logo} style={styles.logo} />
				<Text style={styles.title}>Washington</Text>
			</View>
			<Icon name="keyboard-arrow-down" size={20} color="#fff" />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
		paddingTop: 40,
		paddingBottom: 30,
		paddingRight: 0,
		paddingLeft: 0
	},
	top: {
		flexDirection: 'row',
		alignItems: 'center',
		marginBottom: 10
	},
	logo: {},
	title: {
		fontSize: 18,
		color: '#fff',
		fontWeight: 'bold',
		marginLeft: 8
	}
});
