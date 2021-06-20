import React from 'react'
import {
  Container,
  LocationFooterContainer,
  LocationText,
  LocationButton
} from './styles'

import { Ionicons } from 'react-native-vector-icons'

export default function Maps(props) {
  return (
    <Container>
      {props.MapView}
      <LocationFooterContainer>
        <LocationButton
          onPress={props.onClickLocationButton}
        >
          <Ionicons
            name='location'
            size={25}
            color='#e08b00'
          />
        </LocationButton>
        <LocationText>
          {props.location}
        </LocationText>
      </LocationFooterContainer>
    </Container >
  )
}