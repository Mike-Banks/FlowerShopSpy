import React from 'react';
import { FlatList, ActivityIndicator, Text, View, StyleSheet, Image  } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        padding: 20,
    },

    item: {
        fontFamily: 'serif',
        alignSelf: 'center',
        fontSize: 20,
    },

    title: {
        fontSize: 30,
        fontFamily: 'serif',
        paddingBottom: 10,
    }
});

export class LoadJSON extends React.Component {

    constructor(props){
        super(props);
        this.state ={ isLoading: true}
    }

    componentDidMount(){
        return fetch('http://banksmic.dev.fast.sheridanc.on.ca/Flowers.json')
            .then((response) => response.json())
            .then((responseJson) => {

                this.setState({
                    isLoading: false,
                    dataSource: responseJson.Flowers,
                }, function(){

                });

            })
            .catch((error) =>{
                console.error(error);
            });
    }



    render(){

        if(this.state.isLoading){
            return(
                <View style={{flex: 1, padding: 20}}>
                    <ActivityIndicator/>
                </View>
            )
        }

        return(

            <View style={styles.container}>
                <Text style={styles.title}>Flower Inventory</Text>
                <Image
                    style={{flex:1, alignSelf: 'stretch',height: undefined, width: undefined, margin: 10}}
                    source={require ('./Images/Inventory.jpg')}
                    resizeMode="contain"

                />
                <FlatList
                    data={this.state.dataSource}
                    renderItem={({item}) => <Text style={styles.item}>{item.FlowerName} - {item.FlowerPrice} - {item.FlowerColor}</Text>}
                    keyExtractor={(item, index) => index.toString()}
                />
            </View>
        );
    }
}

export default LoadJSON;