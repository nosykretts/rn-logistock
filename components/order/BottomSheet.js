import React, {Component} from 'react';
import {Container, Text, View, Card, CardItem, Body} from 'native-base';
import {StyleSheet} from "react-native";

class BttomSheet extends Component {
  render() {
    return (
      <View style={styles.root}>
        <Text>BottomSheet</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    backgroundColor: 'green'
  }
});


export default BttomSheet;
