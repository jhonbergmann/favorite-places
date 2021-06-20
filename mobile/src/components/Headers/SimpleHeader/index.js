import React from 'react'
import {
  Container,
  ToBackButtonContainer,
  ToIcoTextHeaderCenterContainer,
  TextApp,
  IgnoreView
} from './styles'

import { AntDesign } from 'react-native-vector-icons'
import { useNavigation } from '@react-navigation/native'

export default function SimpleHeader(props) {

  const navigation = useNavigation()

  return (
    <Container>
      <ToBackButtonContainer onPress={navigation.goBack}>
        <AntDesign
          name='caretleft'
          size={25}
          color='#FFF'
        />
      </ToBackButtonContainer>
      <ToIcoTextHeaderCenterContainer>
        <TextApp style={{ fontSize: 18 }}>
          {props.titleHeader}
        </TextApp>
      </ToIcoTextHeaderCenterContainer>
      <IgnoreView />
    </Container >
  )
}