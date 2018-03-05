import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {StackNavigator} from 'react-navigation'
import {Font, AppLoading} from "expo";
import { Root } from "native-base";

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

}, {})


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {loading: true};
  }

  async componentWillMount() {
    await Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf")
    });
    this.setState({loading: false});
  }

  render() {
    if (this.state.loading) {
      return (
        <Root>
          <AppLoading />
        </Root>
      );
    }
    return (
      <Root>
        <AppNavigator />
      </Root>
    );

  }
}
