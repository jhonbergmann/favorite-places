import React from 'react'
import {
  Container,
  ContainModalContainer,
  ModalView,
  ModalCloseButton,
  ViewSpacing,
  TopMessage,
  BottomMessage
} from './styles'
import { Modal } from "react-native"

import { Fontisto } from 'react-native-vector-icons'
import LottieView from 'lottie-react-native'
import error from '../../../lottie/error.json'
import { useGlobalContext } from '../../../contexs/GlobalContext'

export default function ModalAddress() {

  const {
    modalErrorMessageVisible,
    setModalErrorMessageVisible
  } = useGlobalContext()

  return (
    <Container>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalErrorMessageVisible}
        onRequestClose={() => {
          setModalErrorMessageVisible(!modalErrorMessageVisible)
        }}
      >
        <ContainModalContainer>
          <ModalView>
            <ModalCloseButton onPress={() => setModalErrorMessageVisible(!modalErrorMessageVisible)}>
              <Fontisto
                name='close'
                size={25}
                color='#FFF'
              />
            </ModalCloseButton>
            <ViewSpacing>
              <TopMessage>
                OPS!
              </TopMessage>
              <LottieView
                style={{ width: 250 }}
                resizeMode='contain'
                source={error}
                autoSize
                autoPlay
                loop
              />
              <BottomMessage>
                Algo deu errado!
              </BottomMessage>
            </ViewSpacing>
          </ModalView>
        </ContainModalContainer>
      </Modal>
    </Container>
  )
}