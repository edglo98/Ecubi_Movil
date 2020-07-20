import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {StyleSheet, Text, Image} from 'react-native';
import Colors from '../../../assets/colors';
import Images from '../../../assets/images/index';

const ButtonCreateAcount = (props) => {
  return (
    <TouchableOpacity style={styles.button} onPress={props.navigation}>
      <Image style={styles.imgButton} source={Images.IconGoogle}></Image>
      <Text style={styles.text}>Continuar con Google</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderColor: Colors.Grey,
    borderStyle: 'solid',
    borderWidth: 2,
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingVertical: 12,
    borderRadius: 27,
    marginVertical: 10,
    //agregar el width y el margin a los botons en donde los utilices
    //width = porcentaje deseado; marginHorizontal= porcentaje que sobra entre 2.
  },
  text: {
    color: Colors.Grey,
    fontSize: 20,
    fontWeight: 'bold',
  },
  imgButton: {
    width: 27,
    height: 27,
    marginHorizontal: '8%',
  },
});

export default ButtonCreateAcount;
