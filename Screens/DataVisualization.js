import React, { Component } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export class DataVisualization extends Component {

    constructor(props, context) {
        super(props, context);

    }

    render() {
        return (
        <View>
            <Text style={{alignSelf: 'center'}}>Data</Text>
        </View>
        );
    }
}

export default DataVisualization;