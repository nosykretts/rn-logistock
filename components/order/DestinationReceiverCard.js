import React, { Component } from 'react'
import { Container, Text, View, Card, CardItem, Body } from 'native-base'
import { StyleSheet } from 'react-native'

import ReceiverView from './ReceiverView'
import SenderView from './SenderView'

const receivers = [
  {
    name: 'Parjono',
    address: 'Jl. Halilintar'
  },
  {
    name: 'Jokowi',
    address: 'Jl. Presiden No. 7 Jakarta Pusat. Indonesia Raya Merdeka'
  }
]

class DestinationReceiverCard extends Component {
  render() {
    return (
      <Card style={styles.root} elevation={7} >
        <CardItem style={styles.body}>
          <Text>
            Enter Contact Number (sender and receiver) and note for the driver
          </Text>
          <SenderView
            sender={{
              name: 'Nani Sri Redjeki',
              address: 'Jl. Mahapatih No. 30'
            }}
          />
        </CardItem>
            
        {receivers.map(receiver => (
          <View key={receiver.name}>
            <View
            style={{
              borderBottomColor: 'gainsboro',
              borderBottomWidth: 1,
              marginTop: 10,
              // marginBottom: 20
            }}
          />
            <CardItem>
              <ReceiverView  receiver={receiver} />
            </CardItem>
          </View>
        ))}
      </Card>
    )
  }
}

const styles = StyleSheet.create({
  root:{
    paddingBottom: 10,
    marginLeft: 15,
    marginRight: 15,
    marginBottom: 15,
    borderRadius: 7,
  },
  body: {
    backgroundColor: 'white',
    flexDirection: 'column',
    alignItems: 'stretch',
    margin: 0
  }
})

export default DestinationReceiverCard
