import React from 'react';
import { StyleSheet,StatusBar, Text, View,TextInput, Button, SafeAreaView, Platform, Dimensions } from 'react-native';
import {useDimensions, useDeviceOrientation} from '@react-native-community/hooks';

export default function App() {
  
  return (
    <View style={{
      backgroundColor:"#fff",
      flex:1,
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      
    }}>

      <View style={{
      backgroundColor:"dodgerblue",
      //flex:1,
      width: 100,
      //flexShrink: 1,
      height: 100,
      //alignSelf: "flex-start",
    }}>
      </View>

      <View style={{
      backgroundColor:"gold",
      //flex:1,
      width: 100,
      height: 100,
      top: 20,
      left: 20,
      position: "relative"
    }}>
      </View>

      <View style={{
      backgroundColor:"tomato",
      //flex:1,
      width: 100,
      height: 100,
    }}>
      </View>

     

    </View>
  );
}



