import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import Colors from '../assets/colors';
import Icons from '../assets/images/index';

import HeaderBack from '../components/HeaderBack';
import ToolTittle from '../components/ToolTittle';

import Inventory_Products from './Inventory_Products';
import Inventory_Inventory from './Inventory_Inventory';
import Inventory_Order from './Inventory_Order';

export default class Inventory extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <HeaderBack
          perfileImage={
            'https://avatars0.githubusercontent.com/u/52474257?s=400&u=dfe6025e5d35753fa04e2c7f7bd03898a8d34501&v=4'
          }
        />
        <ToolTittle
          IconTool={Icons.IconLayers}
          Color={Colors.Inventory}
          ToolTittle="Inventario"
        />
        <Tab.Navigator
          tabBarPosition={'top'}
          tabBarOptions={{
            activeTintColor: Colors.BlueButtons,
            inactiveTintColor: Colors.Grey,
            indicatorStyle: {
              bottom: 8,
              width: '25%',
              alignContent: 'center',
              height: 1,
              left: '5%',
            },
          }}>
          <Tab.Screen name="Productos" component={Inventory_Products} />
          <Tab.Screen name="Inventario" component={Inventory_Inventory} />
          <Tab.Screen name="Órdenes de compra" component={Inventory_Order} />
        </Tab.Navigator>
      </>
    );
  }
}
const Tab = createMaterialTopTabNavigator();

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
