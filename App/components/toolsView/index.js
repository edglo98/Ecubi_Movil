import React from 'react';
import {StyleSheet, Image, View, Text} from 'react-native';
import Colors from '../../assets/colors';
import {TouchableOpacity} from 'react-native-gesture-handler';

const Tools = (props) => {
  return (
    <View style={Styles.container}>
      <TouchableOpacity
        style={[Styles.backgroundIcon, {backgroundColor: props.color}]}
        onPress={props.navigation}>
        <Image style={Styles.icon} source={props.img} />
      </TouchableOpacity>
      <Text style={Styles.toolName}>{props.tool}</Text>
    </View>
  );
};

const Styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  backgroundIcon: {
    width: 65,
    height: 65,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 10,
  },
  icon: {
    width: 40,
    height: 40,
  },
  toolName: {
    fontSize: 15,
    color: Colors.Grey,
    marginTop: 10,
  },
});
export default Tools;
