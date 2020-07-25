import React from 'react';
import {View, Text, StyleSheet, Image, ViewPagerAndroid} from 'react-native';

const ToolTittle = (props) => {
  return (
    <View style={[styles.container, {backgroundColor: props.Color}]}>
      <View style={styles.iconLayout}>
        <View style={[styles.backgroundIcon, {backgroundColor: props.Color}]}>
          <Image source={props.IconTool} style={styles.icon} />
        </View>
      </View>
      <View style={styles.tittleLayout}>
        <Text style={styles.tittle}>{props.ToolTittle}</Text>
      </View>
      <View style={styles.Layout} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 58,
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 29,
  },
  iconLayout: {
    width: '20%',
  },
  backgroundIcon: {
    height: 46,
    width: 46,
    borderRadius: 23,
    elevation: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: 30,
    height: 30,
  },
  tittleLayout: {
    width: '60%',
  },
  tittle: {
    fontSize: 22,
    textAlign: 'center',
  },
  Layout: {
    width: '20%',
  },
});

export default ToolTittle;
