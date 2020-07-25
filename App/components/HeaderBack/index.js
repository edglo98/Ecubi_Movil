import React from 'react';
import {View, StyleSheet, Image, Text} from 'react-native';
import Images from '../../assets/images/index';
import {TouchableOpacity} from 'react-native-gesture-handler';

const HeaderBack = (props) => {
  return (
    <View style={styles.headerBack}>
      <View style={styles.backLayout}>
        <TouchableOpacity onPress={() => this.props.navigation.back}>
          <Image source={Images.Back} style={styles.back} />
        </TouchableOpacity>
      </View>
      <View style={styles.logoContainer}>
        <Text style={styles.ecubi}>ecubi</Text>
        <Text style={styles.text}>Mi negocio</Text>
      </View>
      <View style={styles.perfileLayout}>
        <Image source={{uri: props.perfileImage}} style={styles.perfile} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerBack: {
    color: 'black',
    backgroundColor: '#FFFFFF',
    width: '100%',
    height: 70,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
  },
  backLayout: {
    width: '15%',
  },
  back: {
    width: 35,
    height: 35,
  },
  logoContainer: {
    alignItems: 'center',
    width: '70%',
  },
  ecubi: {
    fontSize: 32,
    letterSpacing: 2,
  },
  text: {
    fontSize: 14,
    lineHeight: 13,
  },
  perfileLayout: {
    width: '15%',
  },
  perfile: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
});

export default HeaderBack;
