import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import IntroSlider from './screens/IntroSlider'
import SignIn from './screens/SignIn'
import HomeScreen from './screens/HomeScreen'
import UserScreen from './screens/UserScreen'
import MainScreen from './screens/MainScreen'
import ServicesScreen from './screens/ServicesScreen'

import SelectMapPosition from './screens/CreatePlaces/SelectMapPosition'
import PlaceData from './screens/CreatePlaces/PlaceData'

import SearchHeader from './components/Headers/SearchHeader'
import TitleRegionHeader from './components/Headers/TitleRegionHeader'
import SimpleHeader from './components/Headers/SimpleHeader'

import { useGlobalContext } from './contexs/GlobalContext'

const Stack = createStackNavigator()

export default function Navigator() {

  const {
    place
  } = useGlobalContext()

  return (
    <Stack.Navigator initialRouteName="IntroSlider">
      <Stack.Screen
        name="IntroSlider"
        component={IntroSlider}
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen
        name="SignIn"
        component={SignIn}
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          header: () => <SearchHeader />
        }}
      />
      <Stack.Screen
        name="UserScreen"
        component={UserScreen}
        options={{
          header: () => <SimpleHeader titleHeader={'Usuário'} />
        }}
      />
      <Stack.Screen
        name="MainScreen"
        component={MainScreen}
        options={{
          header: () => <TitleRegionHeader showLocation={place.address} />
        }}
      />
      <Stack.Screen
        name="ServicesScreen"
        component={ServicesScreen}
        options={{
          header: () => <TitleRegionHeader showLocation={place.address} />
        }}
      />
      <Stack.Screen
        name="SelectMapPosition"
        component={SelectMapPosition}
        options={{
          header: () => <SimpleHeader titleHeader={'Selecione no Mapa'} />
        }}
      />
      <Stack.Screen
        name="PlaceData"
        component={PlaceData}
        options={{
          header: () => <SimpleHeader titleHeader={'Digite os Dados'} />
        }}
      />
    </Stack.Navigator>
  )
}