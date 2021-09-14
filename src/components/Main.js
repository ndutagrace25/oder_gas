import React, {Component} from 'react';
import {View, StyleSheet, TouchableOpacity, Text, Image} from 'react-native';
import {Navbar} from '.';
import {cylinder6kg, accessories} from '../images';

class Main extends Component {
  state = {};

  openForm = () => {
    this.props.navigation.navigate('Refil');
  };
  openAccessories = () => {
    this.props.navigation.navigate('Shop');
  };

  render() {
    return (
      <View style={styles.container}>
        {/* Header Tabs */}
        <Navbar navigation={this.props.navigation} />
        {/* Listing the todos */}
        <View style={styles.content}>
          <TouchableOpacity style={styles.card} onPress={this.openForm}>
            <Text>Refil gas</Text>
            <Image source={cylinder6kg} style={styles.img} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.card} onPress={this.openForm}>
            <Text>Buy new gas</Text>
            <Image source={cylinder6kg} style={styles.img} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.card} onPress={this.openAccessories}>
            <Text>Shop for accessories</Text>
            <Image source={accessories} style={styles.img} />
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
    flex: 1,
  },
  card: {
    backgroundColor: '#ffffff',
    paddingHorizontal: 18,
    paddingVertical: 15,
    marginVertical: 10,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  img: {
    height: 50,
    width: 50,
  },
});

export default Main;
