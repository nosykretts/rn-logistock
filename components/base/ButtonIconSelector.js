import React, {Component} from 'react';
import {TouchableOpacity, View, StyleSheet, Alert} from 'react-native'
import {Text, Icon} from 'native-base'

class ButtonIconSelector extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedValue: ''
    }
  }

  handleOnPress = (value) => {
    this.setState({
      selectedValue: value
    }, () => {
      this.props.onChange(value)
    })
  }

  render() {
    return (
      <View style={styles.root}>
        {this.props.items.map(item => {
          const isActive = this.state.selectedValue === item.value
          return (
            <TouchableOpacity key={item.value}
                              onPress={() => this.handleOnPress(item.value)}>
              <View style={[
                styles.button,
                isActive ? styles.activeBorder : {}
              ]}>
                <Icon style={[
                  styles.icon,
                  isActive ? styles.activeColor : {}
                ]} name={item.iconName}/>

                <Text style={[
                  styles.title,
                  isActive ? styles.activeColor : {}
                ]}>{item.title}</Text>
              </View>
            </TouchableOpacity>
          )
        })}
      </View>

    );
  }
}

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
  },
  button: {
    marginRight: 15,
    borderColor: 'grey',
    borderWidth: 1.5,
    borderRadius: 4,
    width: 87,
    padding: 3,
    alignItems: 'center'
  },
  icon: {
    // color: 'grey',
    fontSize: 37
  },
  title: {
    // color: 'grey',
    fontSize: 13
  },

  activeColor: {
    color: 'indigo'
  },
  activeBorder: {
    borderColor: 'indigo'
  }
})


export default ButtonIconSelector;
