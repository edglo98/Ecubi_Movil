import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import Colors from '../../assets/colors'
import Icons from '../../assets/images/index'

const AddData = (props) => {
    return(
        <View style={styles.container}>
            <View style={styles.containerImg}>
                <Image style={styles.img} source={Icons.IconMegaphone}/>
            </View>
            <View style={styles.containerAdd}>
                <View style={styles.borderAdd}>
                    <View style={styles.containerAddImg}>
                        <Image  style={styles.addImg} source={Icons.Cancel}/>
                    </View>
                    <Text style={styles.addText}>
                        Agregar {props.text}
                    </Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        width: "100%",
        flexDirection: "row",
        height: 45,
        marginVertical: 5,
    },
    containerImg : {
        width: "20%",
        justifyContent: "center",
        alignItems: "center",
    },
    img : {
        width: 24,
        height: 24
    },
    containerAdd : {
        width: "80%",
    },
    borderAdd: {
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        height: 40,
        width: "90%",
        backgroundColor: Colors.White,
        borderColor: Colors.Grey,
        borderWidth: 1,
        borderRadius: 5,
    },
    containerAddImg : {
        width: "20%",
        justifyContent: "center",
        alignItems: "center",
    },
    addImg : {
        width: 14,
        height: 14,
        transform: [{rotate: "-45 deg"}] //esto es por mientras
    },
    addText : {
        width: "80%",
        fontSize: 13,
        color: Colors.BlueButtons,
    },

})

export default AddData;