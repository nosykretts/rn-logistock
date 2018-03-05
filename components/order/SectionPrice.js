import React, { Component } from 'react'
import { StyleSheet } from 'react-native'
import {
  Container,
  Text,
  View,
  Card,
  CardItem,
  Body,
  List,
  ListItem
} from 'native-base'

import LineSpacer from '../base/LineSpacer'

const ContentItem = props => {
  return <View style={[styles.LineWrapper]}>{props.children}</View>
}

class SectionPrice extends Component {
  render() {
    return (
      <View style={styles.root}>
        <ContentItem>
          <Text>Price</Text>
          <Text>IDR 200.000</Text>
        </ContentItem>
        <ContentItem>
          <Text>Door to door (driver)</Text>
          <Text>IDR 50.000</Text>
        </ContentItem>
        <LineSpacer marginTop={5} marginBottom={5} />
        <ContentItem>
          <Text style={{
            color: 'indigo',
            fontWeight: 'bold',
          }}>Total payment</Text>
          <Text style={{
            color: 'indigo',
            fontWeight: 'bold',
            fontSize: 25
          }}>IDR 250.000</Text>
        </ContentItem>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  root: {
    // flex: 1,
    // backgroundColor: 'blue'
    padding: 25
  },
  LineWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // padding:5
  },
  
})

export default SectionPrice
