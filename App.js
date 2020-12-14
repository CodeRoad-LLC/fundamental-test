import React from 'react';
import { StyleSheet,StatusBar, Text, View,TextInput, Button, SafeAreaView, Platform, Dimensions } from 'react-native';
import {useDimensions, useDeviceOrientation} from '@react-native-community/hooks';

export default function App() {
  console.log(useDimensions(), useDeviceOrientation());

  return (
    <SafeAreaView style={styles.container}>
      <View style={{
        backgroundColor: 'dodgerblue',
        width: '100%',
        height: 70
      }}>
        <Text>Hello Lisa</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS 
      === "android" ? StatusBar.currentHeight : 0,
  }
});

