import 'react-native-gesture-handler';

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import AppLoading from 'expo-app-loading';
import { useFonts, BebasNeue_400Regular } from '@expo-google-fonts/bebas-neue';



import Routes from './src/router.js'

export default function App() {
  let [fontsLoaded] = useFonts({
    BebasNeue_400Regular,
  })

  if(!fontsLoaded){
    return <AppLoading/>
  }

  return (
    <>
      <StatusBar style="auto" translucent={true}/>
      <Routes/>
    </>
  );
}
