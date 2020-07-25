import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import Colors from '../assets/colors';
import Icons from '../assets/images/index';

import HeaderBack from '../components/HeaderBack';
import ToolTittle from '../components/ToolTittle';

import Finance_Sales from './finance_Sales';
import Finance_Buys from './finance_Buys';
import Finance_expenses from './finance_expenses';

export default class Finance extends Component {
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
          IconTool={Icons.IconMoney}
          Color={Colors.Finance}
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
          <Tab.Screen name="Mis ventas" component={Finance_Sales} />
          <Tab.Screen name="Compras a proveedor" component={Finance_Buys} />
          <Tab.Screen name="Gastos" component={Finance_expenses} />
        </Tab.Navigator>
      </>
    );
  }
}

const Tab = createMaterialTopTabNavigator();
