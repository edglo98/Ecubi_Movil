import React, { Component } from 'react'
import { View, StyleSheet, Text, Image } from 'react-native'
import HeaderCancel from '../components/headerCancel'
import Deal from '../components/deal'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Icons from '../assets/images/index'


export default class DealBranch extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <View>
                <HeaderCancel tittle={"Mis sucursales"}/>
                <Text style={styles.dealName}>
                    Edgar's Shop
                </Text>
                <Deal tittle={"Edgar's shop Norte"}/>


                {/* dividirlo en componente? */}
                <TouchableOpacity style={styles.add} onPress={() => this.props.navigation.navigate("AddBranch")}>
                    <View style={styles.containerImg}>
                        <Image source={Icons.Cancel} style={styles.image}/>
                    </View>
                    <Text style={styles.textAdd}>
                        Agregar una empresa nueva
                    </Text>
                </TouchableOpacity>
                {/* dividirlo en componente? */}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {

    },
    dealName: {
        fontSize: 20,
        textAlign: "center",
        marginVertical: 10,
    },


    //dividirlo en componente?
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
        transform: [{rotate: '-45 deg'}]
    },
    textAdd: {
        paddingLeft: 10,
        fontSize: 15,
        width: "85%",
    }
    //dividirlo en componente?
})