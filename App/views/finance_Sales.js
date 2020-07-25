import React from 'react';
import {Text, StyleSheet, View} from 'react-native';
import SpecificTool from '../components/specificTools';
import Icons from '../assets/images/index';

const Finance_Sales = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.text}>Ventas</Text>
      </View>
      <View style={styles.toolsContainer}>
        <SpecificTool icon={Icons.IconMoney} tittleTool="Nueva venta" />
        <SpecificTool icon={Icons.IconMoney} tittleTool="Nueva venta" />
        <SpecificTool icon={Icons.IconMoney} tittleTool="Nueva venta" />
        <SpecificTool icon={Icons.IconMoney} tittleTool="Nueva venta" />
        <SpecificTool icon={Icons.IconMoney} tittleTool="Nueva venta" />
        <SpecificTool icon={Icons.IconMoney} tittleTool="Nueva venta" />
        <SpecificTool icon={Icons.IconMoney} tittleTool="Nueva venta" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: '#FFF',
    paddingHorizontal: 36,
    paddingTop: 5,
  },
  toolsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'stretch',
    paddingVertical: 11,
  },
  text: {
    fontSize: 30,
  },
});

export default Finance_Sales;
