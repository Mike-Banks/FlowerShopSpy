import React, { Component } from 'react';
import {View, Text, TextInput, StyleSheet, Image, Button} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        padding: 20,
    },

    userRow: {
        flexDirection: 'row',
        marginTop: 5,
    },

    textInput: {
        flex: 1,
        padding: 5,
    },

    title: {
        fontSize: 20,
        fontFamily: 'serif',
    }
});

export class Flower extends Component {

    constructor(props) {
        super(props);
        this.state = {searchText: '', currentImageIndex: 0, imagePath: require('./Images/0.jpg')};
    }

    onSearchType(text) {
        this.state.searchText = text;
    }

    displayRandomPicture() {
        var rNG = Math.floor(Math.random() * Math.floor(4));
        if (rNG == this.state.currentImageIndex) {
            while (rNG == this.state.currentImageIndex) {
                rNG = Math.floor(Math.random() * Math.floor(4));
            }
        }

        this.state.currentImageIndex = rNG;

        var path;
        switch (rNG) {
            case 0:
                path = require('./Images/0.jpg');
                break;
            case 1:
                path = require('./Images/1.jpg');
                break;
            case 2:
                path = require('./Images/2.jpg');
                break;
            case 3:
                path = require('./Images/3.jpg');
                break;
            default:
                path = require('./Images/0.jpg');
                break;
        }

        this.setState({imagePath: path});
    }
    render() {

        const {navigate} = this.props.navigation;

        return (
            <View style={styles.container}>
                <Text style={{fontSize:30, fontFamily: 'serif'}}>Just a Flower Shop</Text>
                <Text style={styles.title}>Not a Spy Hybrid App</Text>
                <Text style={{alignContent: 'center', fontFamily: 'serif', paddingTop: 10}}>Search for flowers below</Text>
                <View style={styles.userRow}>
                    <TextInput
                        style = {styles.textInput}
                        onChangeText={(text) => this.onSearchType(text)}
                    />
                    <Button
                        onPress={() => {
                            if (this.state.searchText == 'abc') {
                                navigate('LoginScreen');
                            } else {
                                this.displayRandomPicture()
                            }
                        }}
                        title="Search"
                        color="#841584"
                    />
                </View>

                <Image
                    style={{flex:1, alignSelf: 'stretch',height: undefined, width: undefined, marginTop: 10}}
                    source={this.state.imagePath}
                    resizeMode="contain"

                />
                <View style={{marginTop: 10}}>
                <Button
                    onPress={() => {navigate('LoadJSONScreen');}}
                    title="View Inventory"/>
                </View>
            </View>
        )
    }
}

export default Flower;