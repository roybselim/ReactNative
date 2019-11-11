import React from 'react';
import {View, Text, Button} from 'react-native';

interface IDetailsScreenProps {
  navigation: any;
}

export default class DetailsScreen extends React.Component<IDetailsScreenProps, {}> {
    render() {
		const {navigation} = this.props;
		return (
			<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
				<Text>Details Screen</Text>
				<Button
					title="Go to Details... again"
					onPress={() => this.props.navigation.push('Details')}
				/>
				<Button
					title="Go to Home"
					onPress={() => this.props.navigation.navigate('Home')}
				/>
				<Button
					title="Config"
					onPress={() => this.props.navigation.navigate('Configuration')}
				/>
				<Button
					title="Go back"
					onPress={() => this.props.navigation.goBack()}
				/>
				<Button
					title="Products"
					onPress={() => this.props.navigation.push('Products')}
				/>
				<Button
					title="Cart"
					onPress={() => this.props.navigation.push('Cart')}
				/>
			</View>
		);
    }
}