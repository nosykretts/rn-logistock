import React, {Component} from 'react';
import {Container, Text, View, Card, CardItem, Body} from 'native-base';
import {StyleSheet} from "react-native";
import Collapsible from './Collapsible'
class DestinationReceiverCard extends Component {
  render() {
    return (
      <Card>
        <Text>DestinationReceiverCard</Text>
        <Collapsible/>
      </Card>
    );
  }
}

const styles = StyleSheet.create({

});


export default DestinationReceiverCard;
