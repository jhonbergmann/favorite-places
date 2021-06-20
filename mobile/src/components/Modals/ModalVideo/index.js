import React, { useState, useCallback } from "react"
import {
  Container,
  ContainModalContainer,
  ModalView,
  ModalCloseButton,
  ViewSpacing,
  TitleText,
  MessageText,
  PlayOrPauseVideoButton
} from './styles'
import { Modal } from "react-native"

import { Fontisto, Ionicons } from 'react-native-vector-icons'
import LottieView from 'lottie-react-native'
import YoutubePlayer from "react-native-youtube-iframe"
import video from '../../../lottie/video.json'
import { useGlobalContext } from '../../../contexs/GlobalContext'

export default function ModalVideo() {

  const [isLoaded, setIsLoaded] = useState(false)
  const [playing, setPlaying] = useState(false)

  const onStateChange = useCallback((state) => {
    if (state === 'ended') {
      setPlaying(false)
    }
  }, [])

  const togglePlaying = useCallback(() => {
    setPlaying((prev) => !prev)
  }, [])

  const {
    place,
    modalVideoVisible,
    setModalVideoVisible
  } = useGlobalContext()

  if (modalVideoVisible === true) {
    setTimeout(
      () => { setIsLoaded(true) },
      2500
    )
  }

  return (
    <Container>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVideoVisible}
        onRequestClose={() => {
          setModalVideoVisible(!modalVideoVisible)
        }}
      >
        <ContainModalContainer>
          <ModalView>
            <ModalCloseButton onPress={() => setModalVideoVisible(!modalVideoVisible)}>
              <Fontisto
                name='close'
                size={25}
                color='#FFF'
              />
            </ModalCloseButton>
            <TitleText>{place.title}</TitleText>
            <ViewSpacing>
              {isLoaded ?
                <>
                  {place.youtube ?
                    <YoutubePlayer
                      height={220}
                      width={'95%'}
                      play={playing}
                      videoId={place.youtube}
                      onChangeState={onStateChange}
                    />
                    :
                    <MessageText>Nenhum vídeo encontrado...</MessageText>
                  }
                  <PlayOrPauseVideoButton onPress={togglePlaying}>
                    {playing ?
                      <Ionicons
                        name='pause-sharp'
                        size={60}
                        color='#FFF'
                      /> :
                      <Ionicons
                        name='play'
                        size={60}
                        color='#FFF'
                      />
                    }
                  </PlayOrPauseVideoButton>
                </>
                :
                <LottieView
                  style={{ width: 250, marginBottom: '30%' }}
                  resizeMode='contain'
                  source={video}
                  autoSize
                  autoPlay
                  loop
                />
              }
            </ViewSpacing>
          </ModalView>
        </ContainModalContainer>
      </Modal>
    </Container>
  )
}