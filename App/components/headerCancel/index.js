import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import Colors from '../../assets/colors';
import Icons from '../../assets/images/index'

const HeaderCancel = (props) => {
    return(
        <View style={styles.container}>
            <View style={styles.containerCancel}>
                <Image style={styles.buttonCancel} source={Icons.Cancel}/>
            </View>
            <Text style={styles.tittle}>
                {props.tittle}
            </Text>
            <View style={styles.layout}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 80,
        backgroundColor: Colors.White,
        flexDirection: "row",
        alignItems: "center",
        elevation: 10,
    },
    containerCancel: {
        width: "15%",
        justifyContent: "center",
        alignItems: "center",
    },
    buttonCancel: {
        width: 16,
        height: 16,
    },
    tittle: {
        fontSize: 26,
        width: "70%",
        textAlign: "center"
    },
    layout: {
        width: "15%"
    }
})

export default HeaderCancel;