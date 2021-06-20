import React from 'react'
import {
  Container,
  ToBackButtonContainer,
  ToLocalizationContainer,
  ToSearchButtonContainer,
  LocalizationText
} from './styles'

import { AntDesign, Ionicons } from 'react-native-vector-icons'
import { useNavigation } from '@react-navigation/native'
import { useGlobalContext } from '../../../contexs/GlobalContext'

export default function TitleRegionHeader(props) {

  const { setOnClickSearch, setSearch } = useGlobalContext()

  function onClickSearch() {
    navigation.navigate('HomeScreen'), setSearch('')
    setTimeout(
      () => { setOnClickSearch(true) },
      1000
    )
  }

  function onClickBack() {
    navigation.goBack(), setSearch(''), setOnClickSearch(false)
  }

  const navigation = useNavigation()

  return (
    <Container>
      <ToBackButtonContainer onPress={onClickBack}>
        <AntDesign
          name='caretleft'
          size={25}
          color='#FFF'
        />
      </ToBackButtonContainer>
      <ToLocalizationContainer>
        <Ionicons
          name='location'
          size={25}
          color='#FFF'
        />
        <LocalizationText>
          {props.showLocation}
        </LocalizationText>
      </ToLocalizationContainer>
      <ToSearchButtonContainer onPress={onClickSearch}>
        <AntDesign
          name='search1'
          size={25}
          color='#FFF'
        />
      </ToSearchButtonContainer>
    </Container>
  )
}