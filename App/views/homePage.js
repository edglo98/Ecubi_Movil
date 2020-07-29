/**
 * @format
 * @flow
 */
import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import Header from '../components/header/index';
import Tools from '../components/toolsView/index';
import Card from '../components/card/index';

import Icons from '../assets/images/index';
import Colors from '../assets/colors';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class HomaPage extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    let negocio = "Edgar's shop"; //Hay que arreglar que las cards se vean mal si el nombre es demasiado largo.
    return (
      <>
        <View style={styles.header}>
          <Header />
        </View>
        <View style={styles.body}>
          <View style={styles.shopName}>
            <TouchableOpacity style={styles.shopButton} onPress={() => this.props.navigation.navigate('MyDeal')}>
              <Text style={styles.shopText}>{negocio}</Text>
              <View style={styles.shopDetails}></View>
            </TouchableOpacity>
          </View>
          <View style={styles.tools}>
            <Tools
              tool="Reportes"
              img={Icons.IconGraph}
              color={Colors.Reports}
              navigation={() => this.props.navigation.navigate('Inventory')}
            />
            <Tools
              tool="Finanzas"
              img={Icons.IconMoney}
              color={Colors.Finance}
              navigation={() => this.props.navigation.navigate('Finance')}
            />
            <Tools
              tool="Inventario"
              img={Icons.IconLayers}
              color={Colors.Inventory}
              navigation={() => this.props.navigation.navigate('Inventory')}
            />
            <Tools
              tool="Clientes"
              img={Icons.IconMegaphone}
              color={Colors.Clients}
              navigation={() => this.props.navigation.navigate('Inventory')}
            />
          </View>
          <ScrollView horizontal={true} style={styles.scrollView}>
            <Card shopName={negocio} />
            <Card shopName={negocio} />
            <Card shopName={negocio} />
          </ScrollView>
          <View style={styles.separator} />
          <Text style={styles.tittleAction}>Acciones rápidas</Text>
          <View style={styles.action}></View>
          <View style={styles.fooder}></View>
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 0.12,
  },
  body: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  shopName: {
    flex: 0.3,
    
  },
  shopButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  shopText: {
    fontSize: 35,
  },
  shopDetails: {
    width: 15,
    height: 15,
    borderBottomColor: Colors.Grey,
    borderLeftColor: Colors.Grey,
    borderBottomWidth: 3,
    borderLeftWidth: 3,
    borderRadius: 3,
    transform: [{ rotate: '-45deg'}],
    margin: 10,
  },
  tools: {
    flex: 0.7,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  scrollView: {
    flex: 0.4,
  },
  separator: {
    flex: 0.01,
    height: 1,
    width: 260,
    elevation: 2,
    backgroundColor: '#D0D0D0',
    borderColor: '#D0D0D0',
    borderRadius: 20,
    borderWidth: 1,
    marginHorizontal: '20%',
  },
  tittleAction: {
    flex: 0.7,
    fontSize: 30,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  action: {
    flex: 0.5,
  },
  fooder: {
    flex: 0.2,
  },
});
