import React, { useState } from 'react'
import {
  Container,
  NextButton,
  NextButtonText
} from './styles'

import MapView, { Marker, MapEvent, PROVIDER_GOOGLE } from 'react-native-maps'
import mapMarker from '../../../../assets/imgs/marker/map-marker.png'
import { useNavigation } from '@react-navigation/core'

export default function SelectMapPosition() {

  const navigation = useNavigation()

  const [position, setPosition] = useState({ latitude: 0, longitude: 0 })

  console.log(position)

  function handleSelectMapPosition(event: MapEvent) {
    setPosition(event.nativeEvent.coordinate)
  }

  return (
    <Container>
      <MapView style={{ height: '100%', width: '100%' }}
        onPress={handleSelectMapPosition}
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: -27.2092052,
          longitude: -49.6401092,
          latitudeDelta: 0.050,
          longitudeDelta: 0.050,
        }}
      >
        {position.latitude !== 0 && (
          <Marker
            icon={mapMarker}
            coordinate={{ latitude: position.latitude, longitude: position.longitude }}
          />
        )}
      </MapView>
      {position.latitude !== 0 && (
        <NextButton onPress={() => { navigation.navigate('PlaceData', { position }) }}>
          <NextButtonText>Próximo</NextButtonText>
        </NextButton>
      )}
    </Container>
  )
}