import React, {Component} from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';
import DataView from '../components/dataView';
import Icons from '../assets/images/index';
import HeaderBack2 from '../components/headerBack2';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class DealConfig extends Component {
  constructor(props){
    super(props)
  }
  render() {
    return (
      <View>
        <HeaderBack2 tittle={"Configuracion del negocio"}/>
        <View style={styles.containerImage}>
          <Image source={Icons.Anadir} style={styles.addImage} />
        </View>
        <Text style={styles.dealTittle}>Edgar's Shop</Text>
        <DataView text={"Edgar's shop"} image={Icons.IconShop} />
        <TouchableOpacity onPress={() => this.props.navigation.navigate("Branch")}>
          <DataView text={'Sucursales'} image={Icons.IconShop} />
        </TouchableOpacity>
        <DataView text={'Ubicación'} image={Icons.IconShop} />
        <DataView text={'Horario de atención'} image={Icons.IconShop} />
        <DataView text={'Correo del negocio'} image={Icons.IconShop} />
        <DataView text={'Teléfono del negocio'} image={Icons.IconShop} />
        <DataView text={'Página web'} image={Icons.IconShop} />
        <DataView
          text={'Describe por qué tu negocio es especial'}
          image={Icons.IconShop}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerImage: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 25,
  },
  addImage: {
    width: 75,
    height: 75,
  },
  dealTittle: {
    fontSize: 20,
    textAlign: 'center',
    padding: 10,
  },
});
