import React, { Component } from 'react'
import { View, StyleSheet, Image } from 'react-native'
import HeaderBack2 from '../components/headerBack2'
import DataView from '../components/dataView'
import Icons from '../assets/images/index'
import AddData from '../components/addData'
import Button from '../components/buttons/buttonCreateAcount'

export default class addBranch extends Component{
    render(){
        return(
            <View>
                <HeaderBack2 tittle={"Nueva sucursal Edgar's shop"}/>
                <View style={styles.containerImg}>
                    <Image source={Icons.Anadir} style={styles.imageAdd}/>
                </View>
                <DataView text={"Edgar's Shop norte"} image={Icons.IconShop}/>
                <AddData text={"direccion de sucursal"}/>
                <AddData text={"horario de atencion"}/>
                {/* //modificarlo para que sea reutilizable? */}{/* <DataAdd/>  crearlo*/}
                <View style={styles.button}>
                    <Button text={"Aplicar"}/>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {

    },
    containerImg: {
        justifyContent: "center",
        alignItems: "center",
        padding: 26,
    },
    imageAdd: {
        width: 75,
        height: 75,
    },
    button : {
        width: "80%",
        marginHorizontal: "10%"
    }
})