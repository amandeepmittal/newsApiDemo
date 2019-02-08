import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

import Article from './src/components/Article';

export default class App extends Component {
	render() {
		return (
			<View style={styles.container}>
				<Article />
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#fff'
	}
});
