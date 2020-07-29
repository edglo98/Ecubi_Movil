import React from 'react'
import { View, StyleSheet, Text, Image } from 'react-native'
import Icons from '../../assets/images/index'
import Colors from '../../assets/colors'
import { TouchableOpacity } from 'react-native-gesture-handler'

const Deal = (props) => {
    return(
        <TouchableOpacity style={styles.container} onPress={props.navigation}>
            <View style={styles.containerImg}>
                <View style={styles.backgroundImg}>
                    <Image style={styles.image} source={Icons.IconShop}/>
                </View>
            </View>
            <Text style={styles.tittleDeal}>
                {props.tittle}
            </Text>
            <View style={styles.containerCheck}>
                <Image style={styles.check} source={Icons.Cancel}/>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        margin: 15,
        alignItems: "center",
    },
    containerImg: {
        width: "15%"
    },
    backgroundImg: {
        width: 33,
        height: 33,
        borderRadius: 8,
        backgroundColor: Colors.BlueButtons,
        justifyContent: "center",
        alignItems: "center",
    },
    image: {
        width: 22,
        height: 22,
    },
    tittleDeal: {
        width: "70%",
        fontSize: 15,
        paddingLeft: 10,
    },
    containerCheck: {
        width: "15%",
        justifyContent: "center",
        alignItems: "center",
    },
    check: {
        width: 20,
        height: 20,
    }

})

export default Deal;