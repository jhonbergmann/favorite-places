import React, { useState } from 'react'
import {
  Container,
  ContainModalContainer,
  ModalView,
  ModalCloseButton,
  TitleText,
  FlatListModalContainer,
  CommentButton,
  CommentButtonText,
  IgnoreView,
  LottieViewContainer
} from './styles'
import { Modal, FlatList } from "react-native"

import Stars from 'react-native-stars'
import { Fontisto, FontAwesome } from 'react-native-vector-icons'
import LottieView from 'lottie-react-native'
import { useGlobalContext } from '../../../contexs/GlobalContext'
import UsersFeedback from '../../UsersFeedback'
import starComments from '../../../lottie/star-comments.json'

export default function ModalComments() {

  const [isLoaded, setIsLoaded] = useState(false)

  const {
    place,
    modalCommentsVisible,
    setModalCommentsVisible,
    setModalSendCommentVisible
  } = useGlobalContext()

  if (modalCommentsVisible === true) {
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
        visible={modalCommentsVisible}
        onRequestClose={() => {
          setModalCommentsVisible(!modalCommentsVisible)
        }}
      >
        <ContainModalContainer>
          <ModalView>
            <ModalCloseButton onPress={() => setModalCommentsVisible(!modalCommentsVisible)}>
              <Fontisto
                name='close'
                size={25}
                color='#FFF'
              />
            </ModalCloseButton>
            <TitleText>{place.title}</TitleText>
            {isLoaded ?
              <FlatListModalContainer>
                <FlatList
                  keyExtractor={item => item.title}
                  data={place.commentaries}
                  contentContainerStyle={{ flexGrow: 1 }}
                  renderItem={({ item }) => {
                    return (
                      <>
                        <UsersFeedback
                          avatarUri={{ uri: item.profileUri }}
                          userName={item.name}
                          title={item.title}
                          stars={
                            <Stars
                              default={item.rating}
                              count={5}
                              half={true}
                              fullStar={
                                <FontAwesome
                                  name={'star'}
                                  size={15}
                                  color='#e08b00'
                                />
                              }
                              emptyStar={
                                <FontAwesome
                                  name={'star-o'}
                                  size={15}
                                  color='#e08b00'
                                />}
                              halfStar={
                                <FontAwesome
                                  name={'star-half-o'}
                                  size={15}
                                  color='#e08b00'
                                />}
                            />
                          }
                          comment={item.content}
                        />
                      </>
                    )
                  }}
                />
              </FlatListModalContainer>
              :
              <LottieViewContainer>
                <LottieView
                  style={{ width: 250 }}
                  resizeMode='contain'
                  source={starComments}
                  autoSize
                  autoPlay
                  loop
                />
              </LottieViewContainer>
            }
            {isLoaded ?
              <CommentButton onPress={() => { setModalSendCommentVisible(true), setModalCommentsVisible(false) }}>
                <CommentButtonText>
                  Comentar
                </CommentButtonText>
              </CommentButton>
              :
              <IgnoreView />
            }
          </ModalView>
        </ContainModalContainer>
      </Modal>
    </Container>
  )
}