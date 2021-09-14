import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  TextInput,
} from 'react-native';
import {Navbar} from '.';
import {
  responsiveWidth,
  responsiveFontSize,
  responsiveHeight,
} from 'react-native-responsive-dimensions';
import {cylinder6kg, accessories} from '../images';
import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel,
} from 'react-native-simple-radio-button';

class Refil extends Component {
  state = {
    radio_props: [
      {label: '6 Kgs', value: '6 Kgs'},
      {label: '13 Kgs', value: '13 Kgs'},
      {label: '50 Kgs', value: '50 Kgs'},
    ],
    gas: '',
    price: 0,
    number: '1',
    brands: [
      {label: 'Pro Gas', value: 'Pro Gas'},
      {label: 'Hashi', value: 'Hashi'},
      {label: 'Kgas', value: 'Kgas'},
    ],
    location: '',
    phone: '',
  };

  //   set selected gas
  selectGas = gas => {
    this.setState({gas});
    if (gas === '6 Kgs') {
      this.setState({price: 900});
    } else if (gas === '13 Kgs') {
      this.setState({price: 1500});
    } else {
      this.setState({price: 2000});
    }
  };

  handleInput = input => {
    const {gas, price, number} = this.state;
    if (gas === '') {
      alert('Please select the gas quantity first');
    } else {
      if (input === NaN || input === 0 || input === '') {
        if (gas === '6 Kgs') {
          this.setState({price: 900});
        } else if (gas === '13 Kgs') {
          this.setState({price: 1500});
        } else {
          this.setState({price: 2000});
        }
      } else {
        this.setState({number, price: parseInt(input) * price});
      }
    }
  };

  handleLocation = location => {
    this.setState({location});
  };

  handlePhone = phone => {
    this.setState({phone});
  };

  render() {
    const {radio_props, price, brands} = this.state;
    return (
      <View style={styles.container}>
        {/* Header Tabs */}
        <Navbar navigation={this.props.navigation} />
        <View style={styles.content}>
          <View style={styles.title}>
            <Text>Fill in the detals below to order your gas</Text>
          </View>
          <View style={styles.title}>
            <Text style={styles.priceCard}>Price: Kes. {price}</Text>
          </View>
          <View style={styles.question}>
            <Text>Select Quantity</Text>
            <RadioForm
              radio_props={radio_props}
              initial={null}
              // formHorizontal={true}
              labelHorizontal={true}
              buttonSize={10}
              onPress={value => {
                this.selectGas(value);
              }}
            />
          </View>
          <View style={styles.question}>
            <Text>How many?</Text>
            <TextInput
              style={styles.input}
              textAlignVertical={'center'}
              keyboardType="number-pad"
              onChangeText={this.handleInput}
              //   value={number}
            />
          </View>
          <View style={styles.question}>
            <Text>Select Brand</Text>
            <RadioForm
              radio_props={brands}
              initial={null}
              // formHorizontal={true}
              labelHorizontal={true}
              animation={true}
              buttonSize={10}
              onPress={value => {
                this.selectGas(value);
              }}
            />
          </View>
          <View style={styles.question}>
            <Text>Location</Text>
            <TextInput
              style={styles.input}
              textAlignVertical={'center'}
              keyboardType="default"
              onChangeText={this.handleInput}
              //   value={number}
            />
          </View>
          <View style={styles.question}>
            <Text>Phone number</Text>
            <TextInput
              style={styles.input}
              textAlignVertical={'center'}
              keyboardType="number-pad"
              onChangeText={this.handlePhone}
              //   value={number}
            />
          </View>
          <TouchableOpacity style={styles.addButton}>
            <Text style={styles.btnLabel}>Submit</Text>
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
    backgroundColor: '#ffffff',
    paddingHorizontal: 20,
    paddingVertical: 15,
  },

  img: {
    height: 50,
    width: 50,
  },
  input: {
    width: responsiveWidth(50),
    height: responsiveHeight(5.4),
    marginTop: responsiveHeight(0.4),
    // marginLeft: 'auto',
    // marginRight: 'auto',
    backgroundColor: '#fff',
    borderColor: '#F4B334',
    borderWidth: 1,
    borderRadius: 4,
    color: '#0D47A1',
    paddingLeft: responsiveWidth(2),
    fontSize: responsiveFontSize(2.4),
    padding: 0,
    margin: 0,
  },
  btnLabel: {
    textAlign: 'center',
    color: '#fff',
    fontWeight: 'bold',
  },
  addButton: {
    backgroundColor: '#2e7d32',
    padding: 10,
    justifyContent: 'center',
    borderRadius: 4,
    marginVertical: 25,
  },
  title: {
    marginVertical: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  priceCard: {
    fontWeight: 'bold',
  },
  question: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

export default Refil;
