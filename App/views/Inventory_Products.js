import React from 'react';
import {Text, StyleSheet, View} from 'react-native';
import SpecificTool from '../components/specificTools';
import Icons from '../assets/images/index';

const Inventory_Products = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.text}>Ventas</Text>
      </View>
      <View style={styles.toolsContainer}>
        <SpecificTool icon={Icons.IconLayers} tittleTool="Productos" />
        <SpecificTool icon={Icons.IconLayers} tittleTool="Productos" />
        <SpecificTool icon={Icons.IconLayers} tittleTool="Productos" />
        <SpecificTool icon={Icons.IconLayers} tittleTool="Productos" />
        <SpecificTool icon={Icons.IconLayers} tittleTool="Productos" />
        <SpecificTool icon={Icons.IconLayers} tittleTool="Productos" />
        <SpecificTool icon={Icons.IconLayers} tittleTool="Productos" />
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

export default Inventory_Products;
