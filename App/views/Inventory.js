import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native';
import HeaderBack from '../components/HeaderBack'


export default class Inventory extends Component {
    constructor(props){
        super(props);
    }
    render(){
        return(
            <View>
                <HeaderBack perfileImage={"https://avatars0.githubusercontent.com/u/52474257?s=400&u=dfe6025e5d35753fa04e2c7f7bd03898a8d34501&v=4"}/>
            </View>
        )
    }
        
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})