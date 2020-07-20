import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {StyleSheet, Text} from 'react-native';
import Colors from '../../../assets/colors';

const ButtonCreateAcount = (props) => {
  return (
    <TouchableOpacity style={styles.button} onPress={props.navigation}>
      <Text style={styles.text}>Iniciar sesión con tu email</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderColor: Colors.BlueButtons,
    borderStyle: 'solid',
    borderWidth: 2,
    alignItems: 'center',
    paddingVertical: 12,
    borderRadius: 27,
    marginVertical: 10,
    //agregar el width y el margin a los botons en donde los utilices
    //width = porcentaje deseado; marginHorizontal= porcentaje que sobra entre 2.
  },
  text: {
    color: Colors.BlueButtons,
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default ButtonCreateAcount;
