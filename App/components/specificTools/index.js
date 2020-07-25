import React from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';
import Colors from '../../assets/colors';

const SpecificTool = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.backgroundImage}>
        <Image source={props.icon} style={styles.image} />
      </View>
      <Text style={styles.textTittle}>{props.tittleTool}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 120,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundImage: {
    width: 80,
    height: 80,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 15,
    backgroundColor: Colors.White,
  },
  image: {
    height: 50,
    width: 50,
  },
  textTittle: {
    top: 5,
    color: Colors.Grey,
    fontSize: 15,
    textAlign: 'center',
  },
});

export default SpecificTool;
