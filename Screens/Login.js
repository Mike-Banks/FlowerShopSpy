import React, { Component} from 'react';
import { View, Text, TextInput, Button, StyleSheet, AsyncStorage } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        alignContent: 'center',
        padding: 20,
    },
    userRow: {
        flexDirection: 'row',
        marginTop: 10,
    },
    textInput: {
        flex: 1,
    },
    errMsg: {
        alignContent: 'center',
        color: '#FF0000',
    },
});

export class Login extends Component {

constructor(props, context) {
        super(props, context);
        this.state = { username: '' , key: '', errMsg: ''};

    }

    onUsernameType(text) {
       this.state.username = text;
    }

    onKeyType(text) {
        this.state.key = text;
    }

    async saveUserInfo(username, secKey) {
        try {
            await AsyncStorage.setItem('@MyUsername:key', username);
            await AsyncStorage.setItem('@MySecurityKey:key', secKey);
        } catch (error) {
            console.log("Error saving data" + error);
        }
    }
    render() {
        const {navigate} = this.props.navigation;

        return (
            <View style={styles.container}>
                <Text style={{padding: 5, fontFamily: 'serif', fontSize: 40}}>Login</Text>
                <View style={styles.userRow}>
                    <Text style={{fontFamily: 'serif', fontSize: 15}}>Enter Username: </Text>
                    <TextInput
                    style = {styles.textInput}
                    onChangeText={(text) => this.onUsernameType(text)}
                />
                </View>
                <View style = {styles.userRow}>
                    <Text style={{fontFamily: 'serif', fontSize: 15}}>Enter Security Key: </Text>
                    <TextInput
                        style = {styles.textInput}
                        onChangeText={(text) => this.onKeyType(text)}
                    />
                </View>
                <View style={{marginTop: 10}}>
                <Button onPress={() => {
                    var errorMsg = '';
                    if (this.state.username == '') {
                        errorMsg = "Error: Please enter a username\n"
                    }

                    if (errorMsg == '') {
                        this.saveUserInfo(this.state.username, this.state.key);
                        navigate('ChatRoomScreen');
                    }
                    this.setState({errMsg: errorMsg});
                }} title="Login"/>
                </View>
                <Text style={styles.errMsg}>{this.state.errMsg}</Text>
                <View style={{marginTop: 10}}>
                <Button
                    onPress={() => {navigate('DataVisualizationScreen');}}
                    title="Data Visualization"/>
                </View>
            </View>
        )
    }
}

export default Login;