/**
* @format
* @flow 
*/
import React from 'react';
import {SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar,} from 'react-native';

import Header from './src/components/header'
import Tools from './src/components/tools'
import Cards from './src/components/card'

import Icons from './src/images/index'
import Colors from './src/colors'
import Card from './src/components/card';

const App = () => {
  var negocio = "Edgar's shop"; //Hay que arreglar que las cards se vean mal si el nombre es demasiado largo.

  return (
    <>
      <View style={styles.header}>
        <Header/>
      </View>
      <View style={styles.body}>
        <Text style={styles.shopName}>{negocio}</Text>
        <View style={styles.tools}>
          <Tools
            tool='Reportes'
            img={Icons.IconGraph}
            color={Colors.Reportes}
          />
          <Tools
            tool='Finanzas'
            img={Icons.IconMoney}
            color={Colors.Finanzas}
          />
          <Tools
            tool='Inventario'
            img={Icons.IconLayers}
            color={Colors.Inventario}
          />
          <Tools
            tool='Clientes'
            img={Icons.IconMegaphone}
            color={Colors.Clientes}
          />
        </View>
        <ScrollView horizontal={true} style={styles.scrollView}>
          <Card 
            shopName={negocio}
          />
          <Card 
            shopName={negocio}
          />
          <Card 
            shopName={negocio}
          />
        </ScrollView>
        <View style={styles.separator}/>
        <Text style={styles.tittleAction}>
          Acciones rápidas
        </Text>
        <View style={styles.action}>

        </View>
        <View style={styles.fooder}>

        </View>
      </View>
      
    </>
  );
};

const styles = StyleSheet.create({
  header : {
    flex: .12,
  },
  body: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  shopName: {
    flex: .3,
    textAlign: "center",
    fontSize: 35,
    
  },
  tools: {
    flex: .7,
    flexDirection: "row",
    justifyContent: "space-evenly",
    
  },
  scrollView: {
    flex: .4,
  },
  separator: {
    flex: .01,
    height: 1,
    width: 260,
    elevation: 2,
    backgroundColor: '#D0D0D0', 
    borderColor:  '#D0D0D0', 
    borderRadius: 20,
    borderWidth: 1,
    marginHorizontal: '20%',
  },
  tittleAction: {
    flex: .7,
    fontSize: 30,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  action: {
    flex: .5, 
  },
  fooder: {
    flex: .2, 
  },
  });

export default App;