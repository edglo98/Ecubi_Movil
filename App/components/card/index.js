import React from 'react';
import {
  View,
  _ScrollView,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Colors from '../../assets/colors';

const Card = (props) => {
  return (
    <View style={styles.backgroundCard}>
      <View style={styles.tittle}>
        <Text style={styles.tittle_seccion}>Salud Financiera de </Text>
        <Text style={styles.tittle_ShopName}> {props.shopName} </Text>
      </View>
      <View style={styles.cardBody}>
        <View style={styles.cardbody_percent}>
          <View style={styles.cardbody_percent_back}>
            <View style={styles.cardbody_percent_front}>
              <Text style={styles.cardbody_percent_number}>80/100</Text>
            </View>
          </View>
        </View>
        <View style={styles.cardbody_description}>
          <Text style={styles.cardbody_description_text}>
            Ingresa tus compras y gastos mensuales para optimizar tus ganancias.
          </Text>
          <View style={styles.cardbody_description_button}>
            <TouchableOpacity onPress={''}>
              <Text style={{color: '#FFFFFF'}}> Ver más </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundCard: {
    width: 350,
    height: 140,
    margin: 5,
    elevation: 15,
    backgroundColor: Colors.White,
    borderColor: Colors.Grey,
    padding: 5,
  },
  tittle: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  tittle_seccion: {
    fontSize: 21,
    color: Colors.PurpleEcubi,
  },
  tittle_ShopName: {
    fontSize: 21,
    color: Colors.PurpleEcubi,
    fontWeight: 'bold',
  },
  cardBody: {
    flexDirection: 'row',
  },
  cardbody_percent: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '40%',
  },
  cardbody_percent_back: {
    borderWidth: 8,
    borderColor: Colors.Grey,
    width: 90,
    height: 90,
    borderRadius: 45,
    elevation: 3,
  },
  cardbody_percent_front: {
    borderWidth: 8,
    borderColor: Colors.Finance,
    width: 90,
    height: 90,
    borderRadius: 45,
    elevation: 3,
    top: -8,
    left: -8,
  },
  cardbody_percent_number: {
    lineHeight: 70,
    textAlign: 'center',
  },
  cardbody_description: {
    flexDirection: 'column',
    alignItems: 'flex-end',
    width: '60%',
  },
  cardbody_description_text: {
    fontSize: 11,
    height: 60,
    paddingTop: 15,
    color: Colors.Grey,
  },
  cardbody_description_button: {
    width: 100,
    height: 35,
    borderRadius: 25,
    backgroundColor: Colors.BlueButtons,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Card;
