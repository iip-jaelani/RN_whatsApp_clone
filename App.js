/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {
  Animated,
  Dimensions,
  SafeAreaView,
  StatusBar,
  Text,
  View,
  ScrollView,
} from 'react-native';
import {connect} from 'react-redux';
import Header from './src/components/Header';
import {Router} from './src/config/router';
import {LIGHT_THEME} from './src/styles/colors';
let {width, height} = Dimensions.get('window');

export class App extends Component {
  render() {
    const theme = LIGHT_THEME;

    return (
      <>
        <StatusBar backgroundColor={theme.PRIMARY_DOFF_COLOR} />
        <Header />
        <Router />
      </>
    );
  }
}
export default App;
