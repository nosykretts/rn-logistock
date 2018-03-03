import React, {Component} from 'react';
import {StyleSheet} from "react-native";
import {Text, View} from 'native-base';

class PickupLocationScreen extends Component {
  render() {
    return (
      <View style={styles.root}>
        <Text>PickupLocation Screen</Text>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default PickupLocationScreen;