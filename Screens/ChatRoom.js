import React, { Component } from 'react';
import { TextInput, StyleSheet, View, Button, Text, AsyncStorage } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'stretch',
        padding: 20,
    },

    userRow: {
        flexDirection: 'row',
        marginTop: 10,
    },

    textInput: {
        flex: 1,
    }
});

export class ChatRoom extends Component {

    constructor(props) {
        super(props);
        this.state = { username: '', text: '', value: '', myText: ''};
        this.loadUsername();
    }

    onType(text) {
        this.setState({text: text});
    }

    onPressSend = () => {
        if (this.state.text != "") {
            var msgTimestamp = new Date().toLocaleTimeString();
            this.state.value += this.state.username + " - " + msgTimestamp + ": " + this.state.text + "\r\n";
            this.setState({myText: this.state.value});
            this.state.text = '';
        }
    }

    async loadUsername() {
        try {
            const value = await AsyncStorage.getItem('@MyUsername:key');
            this.setState({username: value});
        } catch (error) {
            console.log("Error retrieving data" + error);
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style = {{textAlign: 'center', fontFamily: 'serif', fontSize: 18}}>
                    Hello {this.state.username}, type messages below
                </Text>
                <View style={styles.userRow}>
                    <TextInput
                        placeholder = "Enter your messages below"
                        style = {styles.textInput}
                        onChangeText={(text) => this.onType(text)}
                        value = {this.state.text}
                    />
                    <Button
                        onPress={this.onPressSend}
                        title="Send"
                        color="#841584"
                    />
                </View>
                <Text>
                    {this.state.myText}
                </Text>
            </View>
        );
    }

}

export default ChatRoom;