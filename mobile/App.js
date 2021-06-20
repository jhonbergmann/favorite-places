import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { NavigationContainer } from '@react-navigation/native'

import Navigator from './src/Navigator'

import GlobalContextProvider from './src/contexs/GlobalContext'

export default function App() {
  return (
    <NavigationContainer>
      <GlobalContextProvider>
        <StatusBar style="light" />
        <Navigator />
      </GlobalContextProvider>
    </NavigationContainer>
  )
}