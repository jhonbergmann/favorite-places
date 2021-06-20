import React, { useState } from 'react'
import {
  Container,
  ContainModalContainer,
  ModalView,
  SendSucessContainer,
  ModalCloseButton,
  ViewSpacing,
  TitleText,
  CommentTextInput,
  SendCommentButton,
  SendCommentButtonText,
  RatingContainContainer,
  TextMensageSuccess
} from './styles'
import { Modal } from "react-native"

import Stars from 'react-native-stars'
import { Fontisto, FontAwesome } from 'react-native-vector-icons'
import LottieView from 'lottie-react-native'
import { useGlobalContext } from '../../../contexs/GlobalContext'
import commentSentSuccessfully from '../../../lottie/comment-sent-successfully.json'

export default function ModalSendComment() {

  const [isSendSuccess, setIsSendSuccess] = useState(false)

  const {
    place,
    modalSendCommentVisible,
    setModalSendCommentVisible
  } = useGlobalContext()

  function onCLickSendComment() {
    setIsSendSuccess(true),
      setTimeout(
        () => { setIsSendSuccess(false) },
        5000
      )
  }

  return (
    <Container>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalSendCommentVisible}
        onRequestClose={() => {
          setModalSendCommentVisible(!modalSendCommentVisible)
        }}
      >
        <ContainModalContainer>
          <ModalView>
            <ModalCloseButton onPress={() => setModalSendCommentVisible(!modalSendCommentVisible)}>
              <Fontisto
                name='close'
                size={25}
                color='#FFF'
              />
            </ModalCloseButton>
            {isSendSuccess ?
              <SendSucessContainer>
                <TextMensageSuccess>
                  Uuuuuuuaaaau!!!
                </TextMensageSuccess>
                <LottieView
                  style={{ width: 250 }}
                  resizeMode='contain'
                  source={commentSentSuccessfully}
                  autoSize
                  autoPlay
                  loop
                />
                <TextMensageSuccess>
                  Comentado com sucesso!
                </TextMensageSuccess>
              </SendSucessContainer>
              :
              <>
                <TitleText>{place.title}</TitleText>
                <ViewSpacing>
                  <CommentTextInput
                    style={{
                      paddingVertical: 18,
                      paddingHorizontal: 24,
                      textAlignVertical: 'top'
                    }}
                    placeholder='Comente...'
                    maxLength={200}
                    numberOfLines={10}
                    multiline={true}
                    underlineColorAndroid='transparent'
                  />
                  <RatingContainContainer>
                    <Stars
                      count={5}
                      half={true}
                      fullStar={
                        <FontAwesome
                          name={'star'}
                          size={45}
                          color='#e08b00'
                        />
                      }
                      emptyStar={
                        <FontAwesome
                          name={'star-o'}
                          size={45}
                          color='#e08b00'
                        />}
                      halfStar={
                        <FontAwesome
                          name={'star-half-o'}
                          size={45}
                          color='#e08b00'
                        />}
                    />
                  </RatingContainContainer>
                  <SendCommentButton onPress={onCLickSendComment}>
                    <SendCommentButtonText>
                      Enviar
                    </SendCommentButtonText>
                  </SendCommentButton>
                </ViewSpacing>
              </>
            }
          </ModalView>
        </ContainModalContainer>
      </Modal>
    </Container>
  )
}