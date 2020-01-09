/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList
} from 'react-native';

export default class ListScreen extends Component {


  render() {

    const freinds = [
      { name: 'Friend #1', age: 20 },
      { name: 'Friend #2', age: 21 },
      { name: 'Friend #3', age: 22 },
      { name: 'Friend #4', age: 23 },
      { name: 'Friend #5', age: 24 },
      { name: 'Friend #6', age: 25 }
    ];

    return (
            <FlatList
                keyExtractor={(freinds) => freinds.name}
                data={freinds}
                renderItem={({item}) => {
                return <Text style={styles.textStyle}>{item.name} - Age {item.age}</Text>
                }} />
          );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textStyle: {
    marginVertical: 50
  }
});
