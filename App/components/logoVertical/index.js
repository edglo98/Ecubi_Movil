import React from 'react';
import {View, Image, StyleSheet, Text} from 'react-native';
import Icons from '../../assets/images/index';

const LogoVertical = () => {
  return (
    <View style={styles.container}>
      <Image source={Icons.IconShop} style={styles.img} />
      <Text style={styles.text_ecubi}>ecubi</Text>
      <Text style={styles.text_negocio}>Mi negocio</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
  },
  img: {
    width: 70,
    height: 70,
  },
  text_ecubi: {
    fontSize: 33,
    letterSpacing: 2,
    lineHeight: 30,
  },
  text_negocio: {
    fontSize: 15,
    lineHeight: 15,
  },
});

export default LogoVertical;
