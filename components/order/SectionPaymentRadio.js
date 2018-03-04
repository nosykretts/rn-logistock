import React, { Component } from 'react'
import { StyleSheet } from 'react-native'
import { Container, Text, View, Card, CardItem, Body, Radio, Right } from 'native-base'

class SectionPaymentRadio extends Component {
  render() {
    return (
      <View style={styles.root}>
        <Text>Section Pay Radio</Text>
        <Radio selected={true} />
        <Radio selected={true} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    // backgroundColor: 'blue'
  }
})

export default SectionPaymentRadio
