import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const Navbar = ({navigation}) => {
  return (
    <View style={styles.headerCard}>
      <View>
        <Text style={styles.appName}>Hot Gas Deport</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerCard: {
    padding: 5,
    backgroundColor: '#CE2709',
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 15,
  },
  appName: {
    fontWeight: 'bold',
    color: '#e0e0e0',
    fontSize: hp('2.5%'),
    fontFamily: 'Cochin',
  },
});

export default Navbar;
