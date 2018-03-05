import React, {Component} from 'react'
import {StyleSheet} from 'react-native'
import {
  Container,
  Text,
  View,
  Card,
  CardItem,
  Body,
  Radio,
  Right
} from 'native-base'

class SectionPaymentRadio extends Component {
  render() {
    return (
      <View style={styles.root}>
        <Text style={styles.title}>Responsible for payment</Text>
        <View style={styles.radioWrapper}>
          <View style={[styles.radioItem,{
            marginRight: 15
          }]}>
            <Radio style={styles.radio} selected={false}/>
            <Text>Sender</Text>
          </View>
          <View style={styles.radioItem}>
            <Radio style={styles.radio} selected={false}/>
            <Text>Receiver</Text>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    padding: 25
    // backgroundColor: 'blue'
  },
  radioWrapper: {
    // backgroundColor: 'yellow',
    alignItems: 'stretch',
    flexDirection: 'row'
  },
  radioItem:{
    // backgroundColor:'red',
    flexDirection: 'row'
  },
  radio:{
    marginRight: 7
  },
  title: {
    fontWeight: '500',
    marginBottom: 15,
  }
})

export default SectionPaymentRadio
