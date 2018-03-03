import React, {Component} from 'react';
import {Container, Text, View, Card, CardItem, Body} from 'native-base';
import {StyleSheet} from "react-native";

class PackagePhotoCard extends Component {
  render() {
    return (
      <Card>
        <CardItem>
          <Body style={{backgroundColor: 'blue', flex:1}}>
          <View style={styles.wrapper}>
            <View style={{flex: 1}}>
              <Text>
                Text2
              </Text>
            </View>
            <View>
              <Text>
                Buttonx
              </Text>
            </View>
          </View>
          </Body>
        </CardItem>
      </Card>
    );
  }
}

const styles = StyleSheet.create({
  wrapper:{
    flex: 1,
    flexDirection: 'row',
    // justifyContent: 'space-around',
    backgroundColor: 'red'
  }

});


export default PackagePhotoCard;
