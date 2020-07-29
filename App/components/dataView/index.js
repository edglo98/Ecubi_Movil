import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native'
import Colors from '../../assets/colors';
import colors from '../../assets/colors';

const DataView = (props) => {
    return(
        <View style={styles.container}>
            <View style={styles.containerImage}>
                <Image source={props.image} style={styles.image}/>
            </View>
            <Text style={styles.text}>
                {props.text}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: 45,
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: Colors.White,
        borderBottomWidth: .5,
        borderTopWidth: .5,
        borderColor: colors.Grey

    },
    containerImage: {
        width: "20%",
        justifyContent: "center",
        alignItems: "center",
    },
    image: {
        width: 30,
        height: 30,
    },
    text: {
        fontSize: 15,
        paddingLeft: 15,
    }
})

export default DataView;