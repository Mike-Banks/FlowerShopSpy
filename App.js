import React, { Component, } from 'react';
import { StackNavigator } from 'react-navigation';
import {AppRegistry} from 'react-native'

import Flower from './Screens/Flower';
import Login from './Screens/Login';
import ChatRoom from './Screens/ChatRoom';
import DataVisualization from './Screens/DataVisualization';
import LoadJSON from './Screens/LoadJSON';

export const AppNavigator = StackNavigator({
    FlowerScreen: { screen: Flower },
    LoginScreen: { screen: Login },
    ChatRoomScreen: { screen: ChatRoom },
    DataVisualizationScreen: {screen: DataVisualization},
    LoadJSONScreen: {screen: LoadJSON}
    },
    {initialRouteName : 'FlowerScreen'}
    );

export default class App extends Component {
    render() {
        return (
            <AppNavigator
                initialRoute={{component: Login, title: 'Login Screen', passProps: {index: 1}}}/>
        );
    }
}

AppRegistry.registerComponent('FlowerShopSpy', () => App);