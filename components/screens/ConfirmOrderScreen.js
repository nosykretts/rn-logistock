import React, { Component } from 'react'
import { Container, Text, View, Content } from 'native-base'
import { StyleSheet, ScrollView } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import Card from '../base/Card'
import PackagePhotoCard from '../order/PackagePhotoCard'
import DestinationReceiverCard from '../order/DestinationReceiverCard'
import BottomSheet from '../order/BottomSheet'

class ConfirmOrderScreen extends Component {
  render() {
    return (
      <Container style={styles.root}>
        <Content>
          <PackagePhotoCard />
          <DestinationReceiverCard />
          <BottomSheet />
        </Content>
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  root: {
    // flex: 1,
    // backgroundColor: 'yellow'
  }
})

export default ConfirmOrderScreen
