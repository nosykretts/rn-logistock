import React, { Component } from 'react'
import { StyleSheet } from 'react-native'
import { Container, Text, View, Card, CardItem, Body } from 'native-base'

class SectionPayWith extends Component {
  render() {
    return (
      <View style={styles.root}>
        <Text>Section Pay With</Text>
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

export default SectionPayWith
