import React, {Component} from 'react';
import {Text, View, Card, CardItem, Body} from 'native-base';
import {StyleSheet} from "react-native";

class ConfirmOrderScreen extends Component {
  render() {
    return (
      <Card>
        <CardItem header>
          <Text>NativeBase</Text>
        </CardItem>
        <CardItem>
          <Body>
            {this.props.children}
          </Body>
        </CardItem>

      </Card>
    );
  }
}

const styles = StyleSheet.create({

});


export default ConfirmOrderScreen;
