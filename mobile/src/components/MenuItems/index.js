import React from 'react'
import {
  Container,
  CallButton,
  ServicesButton,
  AddressButton,
  CommentsButton,
  VideoButton,
  TitleTextButton
} from './styles'

import {
  FontAwesome,
  Ionicons,
  SimpleLineIcons,
  MaterialCommunityIcons
} from 'react-native-vector-icons'

export default function MenuItems(props) {
  return (
    <Container>
      <CallButton onPress={props.onClickCallButton}>
        <Ionicons
          name='call'
          size={25}
          color='#e08b00'
        />
        <TitleTextButton>
          Ligar
        </TitleTextButton>
      </CallButton>
      <ServicesButton onPress={props.onClickServicesButton}>
        <SimpleLineIcons
          name='diamond'
          size={25}
          color='#e08b00'
        />
        <TitleTextButton>
          Serviços
        </TitleTextButton>
      </ServicesButton>
      <AddressButton onPress={props.onClickAddressButton}>
        <Ionicons
          name='location'
          size={25}
          color='#e08b00'
        />
        <TitleTextButton>
          Endereço
        </TitleTextButton>
      </AddressButton>
      <CommentsButton onPress={props.onClickCommentsButton}>
        <FontAwesome
          name='comments'
          size={25}
          color='#e08b00'
        />
        <TitleTextButton>
          Comentários
        </TitleTextButton>
      </CommentsButton>
      <VideoButton onPress={props.onClickVideoButton}>
        <MaterialCommunityIcons
          name='video'
          size={25}
          color='#e08b00'
        />
        <TitleTextButton>
          Vídeo
        </TitleTextButton>
      </VideoButton>
    </Container>
  )
}