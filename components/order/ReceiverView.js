import React, { Component } from 'react'
import { StyleSheet } from 'react-native'
import { Container, Text, View, Card, CardItem, Body } from 'native-base'

import CollapsibleView from './CollapsibleView'

class ReceiverView extends Component {
  render() {
    return (
      <CollapsibleView
        title={this.props.receiver.name}
        subtitle={this.props.receiver.address}
        iconLeft={'ios-star'}
        iconLeftColor={'orange'}
        isReceiver
      >
        <Text>Receiver View</Text>
      </CollapsibleView>
    )
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: 'blue'
  }
})

export default ReceiverView
