import React, { Component } from 'react'
import { View, StyleSheet, Image, Text } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

import HeaderCancel from '../components/headerCancel'
import Deal from '../components/deal'

import Icons from '../assets/images/index'

export default class MyDeal extends Component{
    constructor(){
        super();
        this.state = {
            tiendas: [{
                key: 1,
                name: "edgar's shop",
                status: true,
            },{
                key: 2,
                name: "freddy's shop",
                status: false,
            }]
        }
    }

    render(){
        return(
            <View>
                <HeaderCancel tittle={"Mi negocio"}/>

                {this.state.tiendas.map((tiendas) => (
                    <Deal tittle={tiendas.name} navigation={() => this.props.navigation.navigate('DealConfig')}/>
                ))}

                <TouchableOpacity style={styles.add}>
                    <View style={styles.containerImg}>
                        <Image source={Icons.Cancel} style={styles.image}/>
                    </View>
                    <Text style={styles.textAdd}>
                        Agregar una empresa nueva
                    </Text>
                </TouchableOpacity>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    add: {
        flexDirection: "row",
        marginVertical: 15,
    },
    containerImg: {
        width: "15%",
        justifyContent: "center",
        alignItems:"center",
    },
    image: {
        width: 20,
        height: 20,
    },
    textAdd: {
        paddingLeft: 10,
        fontSize: 15,
        width: "85%",
    }
})