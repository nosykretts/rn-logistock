import React, { Component } from 'react'
import { View } from 'react-native'

export default (props) => {
  return (
    <View
      style={{
        borderBottomColor: 'gainsboro',
        borderBottomWidth: 1,
        ...props
        // marginTop: 10
        // marginBottom: 20
      }}
    />
  )
}
