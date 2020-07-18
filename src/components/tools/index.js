import React from 'react';
import { StyleSheet, Image, View, Text } from 'react-native';
import Colors from '../../colors'

const Tools = (props) => {
    return(
        <View style={Styles.container}>
            <View style={[Styles.backgroundIcon, {backgroundColor: props.color}]}>
                <Image
                    style={Styles.icon}
                    source={props.img}
                />
                
            </View>
            <Text style={Styles.toolName}>
                {props.tool}
            </Text>
        </View>
    )
}

const Styles = StyleSheet.create({
    container:{
        alignItems: "center",
        justifyContent: "center"
    },
    backgroundIcon: {
        width: 65,
        height: 65,
        borderRadius: 40,
        justifyContent: "center",
        alignItems: "center",
        elevation: 10,
    },
    icon: {
        width: 40,
        height: 40,
    },
    toolName: {
        fontSize: 15,
        color: Colors.Grey,
        marginTop: 10,
    }
})
export default Tools;