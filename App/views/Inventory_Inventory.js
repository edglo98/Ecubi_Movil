import React from 'react';
import {Text, StyleSheet, View} from 'react-native';

const Inventory_Inventory = () => {
  return (
    <View style={styles.container}>
      <Text>Aqui iria el Inventario</Text>
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

export default Inventory_Inventory;
