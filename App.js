/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {SafeAreaView, StatusBar, StyleSheet, Text, View} from 'react-native';
import NeumorphismButton from './src/neumorphism-button';

const App: () => Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        <View style={styles.body}>
          <View style={styles.sectionContainer}>
            <NeumorphismButton size={8} style={styles.button1}>
              <Text>Hello</Text>
            </NeumorphismButton>
            <NeumorphismButton size={8} style={styles.button2}>
              <Text>Hello</Text>
            </NeumorphismButton>
            <NeumorphismButton size={8}>
              <Text>Hello2</Text>
            </NeumorphismButton>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#55b9f3',
    flex: 1,
  },
  body: {
    backgroundColor: '#55b9f3',
  },
  sectionContainer: {
    marginTop: 32,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
  },
  button1: {
    padding: 60,
  },
  button2: {
    padding: 30,
  },
});

export default App;
