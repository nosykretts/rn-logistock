import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {StackNavigator} from 'react-navigation'

import ConfirmOrderScreen from './components/screens/ConfirmOrderScreen'
import PickupLocationScreen from './components/screens/PickupLocationScreen'

const AppNavigator = StackNavigator({
  confirmOrder: {
    screen: ConfirmOrderScreen,
    navigationOptions: {
      // headerTitle: 'Episode Detail',
      headerTitle: 'Confirm Order'
    }
  },
  pickupLocation: {
    screen: PickupLocationScreen,
    navigationOptions: {
      headerTitle: 'Pickup Location',
      // header: 'Pickup Location'
    }
  },

}, {

})


export default class App extends React.Component {
  render() {
    return (<AppNavigator/>);
  }
}
