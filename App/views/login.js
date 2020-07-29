import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import LogoVertical from '../components/logoVertical';
import ButtonCreateAcount from '../components/buttons/buttonCreateAcount';
import ButtonLogin from '../components/buttons/buttonLogin';
import ButtonGoogle from '../components/buttons/buttonGoogle';
import Colors from '../assets/colors';

export default class Login extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.circle1}/>
        <View style={styles.circle2}/>

        <LogoVertical />
        <Text style={styles.TextHook1}>Ecubi,</Text>
        <Text style={styles.TextHook2}>
          el mejor aliado para el crecimiento de tu negocio
        </Text>
        <View style={styles.buttons}>
          <ButtonCreateAcount
            text={"Crear cuenta nueva"}
            navigation={() => this.props.navigation.navigate('Home')}
          />
          <ButtonLogin
            navigation={() => this.props.navigation.navigate('Home')}
          />
          <ButtonGoogle
            navigation={() => this.props.navigation.navigate('Home')}
          />
        </View>
        <Text style={styles.legalCondition}>
          Al crear la cuenta aceptas las{' '}
          <Text style={styles.redirect}>Condiciones legales </Text>
          En cualquier momento podrás modificar el{' '}
          <Text style={styles.redirect}>Tratamiento de datos.</Text>
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  TextHook1: {
    fontSize: 40,
    color: Colors.BlueContent,
    fontWeight: 'bold',
    lineHeight: 60,
    paddingLeft: 20,
  },
  TextHook2: {
    fontSize: 40,
    color: Colors.BlueContent,
    fontWeight: 'bold',
    lineHeight: 60,
    paddingLeft: 20,
  },
  buttons: {
    width: '85%',
    marginHorizontal: '7.5%',
  },
  legalCondition: {
    fontSize: 12,
    color: Colors.Grey,
    textAlign: 'center',
    lineHeight: 25,
    paddingHorizontal: 10,
  },
  redirect: {
    paddingHorizontal: 2,
    color: Colors.BlueButtons,
  },
  circle1:{
    position: 'absolute',
    backgroundColor: '#DDADF7',
    width: 300,
    height: 300,
    borderRadius: 150,
    top: -170,
    left: -150,
  },
  circle2:{
    position: 'absolute',
    borderStyle: "solid",
    borderWidth: 2,
    borderColor: '#DDADF7',
    width: 320,
    height: 320,
    borderRadius: 160,
    top: -30,
    right: -200,
  },
});
