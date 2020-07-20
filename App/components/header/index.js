import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';
import iconShop from '../../assets/images/tienda.png';

const Header = () => {
  return (
    <>
      <View style={styles.header}>
        <View style={styles.header_logo}>
          <View>
            <Image style={styles.iconShop} source={iconShop} />
          </View>
          <View style={styles.header_logo_text}>
            <Text style={styles.header_logo_ecubi}>ecubi</Text>
            <Text style={styles.header_logo_negocio}>Mi negocio</Text>
          </View>
        </View>
        <View style={styles.header_perfile}>
          <Image
            style={styles.ProfilePicture}
            source={{
              uri:
                'https://avatars0.githubusercontent.com/u/52474257?s=400&u=dfe6025e5d35753fa04e2c7f7bd03898a8d34501&v=4',
            }}
          />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  header: {
    flex: 1,
    width: '100%',
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    paddingHorizontal: 20,
    elevation: 25,
    paddingVertical: 6,
    borderBottomWidth: 2,
    borderBottomColor: '#CCCCCC',
  },
  ProfilePicture: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  header_perfile: {
    flex: 1,
    alignItems: 'flex-end',
  },
  header_logo: {
    flex: 1,
    alignItems: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center',
  },

  header_logo_text: {
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 10,
  },
  header_logo_ecubi: {
    fontSize: 33,
    letterSpacing: 2,
  },
  header_logo_negocio: {
    fontSize: 15,
    top: -7,
  },
  iconShop: {
    width: 50,
    height: 50,
  },
});

export default Header;
