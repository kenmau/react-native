/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StyleSheet, View} from 'react-native';

import Header from './components/Header';
import StartGameScreen from './screen/StartGameScreen';

export default function App() {
  return (
    <View style={styles.screen}>
      <Header title="Guess a Number"></Header>
      <StartGameScreen></StartGameScreen>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
