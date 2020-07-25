import React from 'react';
import {Text, StyleSheet, View} from 'react-native';

const Inventory_Order = () => {
  return (
    <View style={styles.container}>
      <Text>Aqui irian las ordenes</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    backgroundColor: '#FFF',
  },
});

export default Inventory_Order;
