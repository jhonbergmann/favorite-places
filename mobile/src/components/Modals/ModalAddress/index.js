import React from 'react'
import {
  Container,
  ContainModalContainer,
  ModalView,
  ModalCloseButton,
  AddressText,
  ViewSpacing,
  TitleText,
  ClickButtonToMapRoute,
  ClickButtonToMapRouteText
} from './styles'
import { Modal, Linking } from "react-native"

import { Fontisto } from 'react-native-vector-icons'
import LottieView from 'lottie-react-native'
import { useGlobalContext } from '../../../contexs/GlobalContext'
import locationFinding from '../../../lottie/location-finding.json'

export default function ModalAddress() {

  const { place, modalAddressVisible, setModalAddressVisible } = useGlobalContext()

  function handleOpenGoogleMapsRoutes() {
    Linking.openURL(`https://www.google.com/maps/dir/?api=1&destination=${place.latitude},${place.longitude}`)
  }

  return (
    <Container>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalAddressVisible}
        onRequestClose={() => {
          setModalAddressVisible(!modalAddressVisible)
        }}
      >
        <ContainModalContainer>
          <ModalView>
            <ModalCloseButton onPress={() => setModalAddressVisible(!modalAddressVisible)}>
              <Fontisto
                name='close'
                size={25}
                color='#FFF'
              />
            </ModalCloseButton>
            <TitleText>{place.title}</TitleText>
            <ViewSpacing>
              <AddressText>{place.address}</AddressText>
              <LottieView
                style={{ width: 300 }}
                resizeMode='contain'
                source={locationFinding}
                autoSize
                autoPlay
                loop
              />
              <ClickButtonToMapRoute onPress={handleOpenGoogleMapsRoutes}>
                <ClickButtonToMapRouteText>Ver no Google Maps</ClickButtonToMapRouteText>
              </ClickButtonToMapRoute>
            </ViewSpacing>
          </ModalView>
        </ContainModalContainer>
      </Modal>
    </Container>
  )
}