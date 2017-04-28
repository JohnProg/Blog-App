import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  TextInput,
  View
 } from 'react-native';

 // Components
 import NavBar from './components/navBar';

export default class AppContainer extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Text style={{width: 100}}>Hello world</Text>
        <NavBar
          title = "Inicio"
          leftText = "1"
          rightText = "2"
          containerStyle={{backgroundColor: '#303030'}}
          colorText='#eee' />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center', // align horizontal
    justifyContent: 'center', // align vertical
    backgroundColor: "rgba(239,173,44,1)"
  }
})
