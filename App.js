import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends Component {
  render(){
 return (
    // proview componnet that are transalate on both ios and Android
    // React from Web use diferent components from React Native
    <View style={styles.container}>
      <Text>El Cateo</Text>
    </View>
  );
}

  }
 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
