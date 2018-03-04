import React, { Component } from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import { Container, Text, View, Card, CardItem, Body } from 'native-base'
import { Ionicons } from '@expo/vector-icons'

class CollapsibleView extends Component {
  state = {
    isActive: true
  }
  toggleView = () => {
    this.setState({
      isActive: !this.state.isActive
    })
  }
  render() {
    const {
      isReceiver,
      iconLeft,
      iconLeftColor,
      title,
      subtitle,
      isActive
    } = this.props
    return (
      <View style={styles.root}>
        
        <View style={styles.header}>
          <View style={styles.iconLeftWrapper}>
            <Ionicons name={'ios-pin'} size={40} color={iconLeftColor} />
          </View>
          <View style={styles.titleWrapper}>
            <Text style={[styles.title, { color: iconLeftColor }]}>
              {title}
            </Text>
            <TouchableOpacity>
              <Text style={styles.subtitle}>{subtitle}</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.iconRightWrapper}>
            <TouchableOpacity onPress={this.toggleView}>
              <Ionicons
                name={`ios-arrow-${this.state.isActive ? 'up' : 'down'}`}
                size={35}
                style={{
                  marginTop:-10
                }}
                color="gainsboro"
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.childrenContainer}>
          {this.state.isActive && this.props.children}
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1
    // backgroundColor: 'indigo'
  },
  header: {
    // backgroundColor: 'yellow',
    flexDirection: 'row',
    flex: 1,
    marginTop: 10
    // justifyContent: 'space-around'
  },
  iconLeftWrapper: {
    width: 30
    // backgroundColor: 'red'
  },
  iconRightWrapper: {
    // backgroundColor: 'crimson',
    // alignItems: 'flex-start'
    // width: 40
  },
  titleWrapper: {
    flex: 2,
    flexDirection: 'column',
    // backgroundColor: 'green'
  },
  title: {
    fontSize: 19,
    fontWeight: '600'
  },
  subtitle: {
    fontSize: 15,
    color: 'grey'
  },
  childrenContainer: {
    // backgroundColor: 'blue',
    marginLeft: 30
  }
})

export default CollapsibleView
