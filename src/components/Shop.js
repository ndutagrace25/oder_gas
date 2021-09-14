import React, {Component} from 'react';
import {View, StyleSheet, TouchableOpacity, Text, Image} from 'react-native';
import {Navbar} from '.';
import {
  tablegas,
  gastube,
  burner,
  cooker,
  gasgrill,
  regulator,
} from '../images';

class Shop extends Component {
  state = {};

  render() {
    return (
      <View style={styles.container}>
        {/* Header Tabs */}
        <Navbar navigation={this.props.navigation} />
        {/* Listing the todos */}
        <View style={styles.content}>
          <TouchableOpacity style={styles.card}>
            <Text>Gas Burner</Text>
            <Image source={burner} style={styles.img} />
            <Text>Kes. 300</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.card}>
            <Text>Table Gas Burnner</Text>
            <Image source={tablegas} style={styles.img} />
            <Text>Kes. 3000</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.card}>
            <Text>Gas Tube</Text>
            <Image source={gastube} style={styles.img} />
            <Text>Kes. 200</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.card}>
            <Text>Cooker</Text>
            <Image source={cooker} style={styles.img} />
            <Text>Kes. 15000</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.card}>
            <Text>Gas Grill</Text>
            <Image source={gasgrill} style={styles.img} />
            <Text>Kes. 300</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.card}>
            <Text>Gas Regulator</Text>
            <Image source={regulator} style={styles.img} />
            <Text>Kes. 500</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E4E4E4',
  },
  content: {
    marginVertical: 15,
    marginHorizontal: 10,
    // flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  card: {
    backgroundColor: '#ffffff',
    paddingHorizontal: 18,
    paddingVertical: 15,
    width: 156,
    marginVertical: 10,
    justifyContent: 'space-between',
    flexDirection: 'column',
    alignItems: 'center',
  },
  img: {
    height: 80,
    width: 80,
  },
});

export default Shop;
