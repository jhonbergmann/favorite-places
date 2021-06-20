import React, { useCallback, useState } from 'react'
import {
  Container,
  ImageBlurBackground,
  CarouselContainContainer,
  SlideView,
  ItemButtonContainer,
  ItemImage,
  ItemTitleText,
  IconLocationContainer,
  ThumbnaiImageContainer,
  ThumbnaiImage,
  AddItemButtonContainer,
  AddItemButton,
  AddItemText
} from './styles'

import { useNavigation, useFocusEffect, useIsFocused } from '@react-navigation/native'
import Carousel from 'react-native-snap-carousel'
import { Ionicons, MaterialIcons } from 'react-native-vector-icons'
import ModalErrorMessage from '../../components/Modals/ModalErrorMessage'
import LoadingScreen from '../../components/Loading'
import { useGlobalContext } from '../../contexs/GlobalContext'
import api from '../../services/api'

export default function HomeScreen() {

  const {
    isLoadedHomeScreen,
    setIsLoadedHomeScreen,
    places,
    setPlaces,
    carouselRef,
    setModalErrorMessageVisible,
    setFilteredPlaces
  } = useGlobalContext()

  const [background, setBackground] = useState(places?.[0]?.images?.[0]?.url)

  const isFocused = useIsFocused()

  const navigation = useNavigation()

  useFocusEffect(
    useCallback(() => {
      async function getData() {
        try {
          const response = await api.get('places')
          setPlaces(response.data)
          setFilteredPlaces(response.data)
          setIsLoadedHomeScreen(true)
        } catch (err) {
          setIsLoadedHomeScreen(false)
          setTimeout(
            () => { setModalErrorMessageVisible(true) },
            3000
          )
        }
      }
      if (isFocused) {
        getData()
      }
    }, [isFocused]
    ))

  const _renderItem = ({ item, id }) => {
    return (
      <ItemButtonContainer onPress={() => { navigation.navigate('MainScreen', { id: item.id }) }}>
        <ItemImage
          source={{ uri: item?.images?.[0]?.url }}
        />
        <ItemTitleText>
          {item.title}
        </ItemTitleText>
        <IconLocationContainer>
          <Ionicons
            name='location'
            size={40}
            color='#FFF'
          />
        </IconLocationContainer>
        <ThumbnaiImageContainer>
          <ThumbnaiImage
            source={{ uri: item?.images?.[0]?.url }}
          />
        </ThumbnaiImageContainer>
      </ItemButtonContainer>
    )
  }

  return (
    <Container>
      {isLoadedHomeScreen ?
        <ImageBlurBackground
          blurRadius={5}
          source={{ uri: background === undefined ? places?.[0]?.images?.[0]?.url : background }}>
          <CarouselContainContainer>
            <SlideView>
              <Carousel
                ref={carouselRef}
                data={places}
                renderItem={_renderItem}
                sliderWidth={1000}
                itemWidth={320}
                autoplay={true}
                autoplayInterval={4000}
                inactiveSlideOpacity={0.5}
                onSnapToItem={(index) => {
                  setBackground(places?.[index]?.images?.[0]?.url)
                }}
              />
            </SlideView>
          </CarouselContainContainer>
          <AddItemButtonContainer onPress={() => { navigation.navigate('SelectMapPosition') }}>
            <AddItemText>
              Adicionar
            </AddItemText>
            <AddItemButton>
              <MaterialIcons
                name='library-add'
                size={40}
                color='#FFF'
              />
            </AddItemButton>
          </AddItemButtonContainer>
        </ImageBlurBackground>
        : <LoadingScreen />}
      <ModalErrorMessage />
    </Container>
  )
}