import React from 'react';
import {View, StyleSheet, Image, Text} from 'react-native';
import Images from '../../assets/images/index';
import {TouchableOpacity} from 'react-native-gesture-handler';

const HeaderBack2 = (props) => {
  return (
    <View style={styles.headerBack}>
      <View style={styles.backLayout}>
        <TouchableOpacity onPress={() => this.props.navigation.back}>
          <Image source={Images.Back} style={styles.back} />
        </TouchableOpacity>
      </View>
      <View style={styles.logoContainer}>
        <Text style={styles.tittle}>
        {props.tittle}
        </Text>
      </View>
      <View style={styles.Layout}>
        
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
  tittle: {
    fontSize: 22,
    textAlign: "center"
  },
  Layout: {
    width: '15%',
  },
});

export default HeaderBack2;
