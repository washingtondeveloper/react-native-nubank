import React from 'react';
import { StatusBar } from 'react-native';

import Main from './src/Main';

export default function App() {
	return (
		<React.Fragment>
			<StatusBar barStyle="light-content" backgroundColor="#8b10ae" />
			<Main />
		</React.Fragment>
	);
}
