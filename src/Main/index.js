import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Header from '../components/Header';
import Tabs from '../components/Tabs';

export default function Start() {
	return (
		<View style={styles.container}>
			<Header />
			<View style={styles.content}>
				<View style={styles.card}>
					<View style={styles.cardHeader}>
						<Icon name="attach-money" size={28} color="#666" />
						<Icon name="visibility-off" size={28} color="#666" />
					</View>
					<View style={styles.cardContent}>
						<Text style={styles.title}>Saldo disponível</Text>
						<Text style={styles.description}>R$ 179.235,23</Text>
					</View>
					<View style={styles.cardFooter}>
						<Text style={styles.annotation}>
							Transferência de R$ 1.000,23 de Marta Macedo hoje as 06:00h
						</Text>
					</View>
				</View>
			</View>
			<Tabs />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#8b10ae',
		justifyContent: 'center'
	},
	content: {
		flex: 1,
		maxHeight: 400,
		zIndex: 5
	},

	card: {
		flex: 1,
		backgroundColor: '#fff',
		borderRadius: 4,
		marginLeft: 20,
		marginRight: 20,
		height: '100%'
	},
	cardHeader: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		padding: 30
	},
	cardContent: {
		flex: 1,
		paddingLeft: 30,
		paddingRight: 30,
		justifyContent: 'center'
	},
	title: {
		fontSize: 13,
		color: '#999'
	},
	description: {
		fontSize: 32,
		marginTop: 3,
		color: '#333'
	},
	cardFooter: {
		padding: 30,
		backgroundColor: '#eee',
		borderBottomRightRadius: 4,
		borderBottomLeftRadius: 4
	},
	annotation: {
		fontSize: 13,
		color: '#333'
	}
});
