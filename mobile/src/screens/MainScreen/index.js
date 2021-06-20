import React, { useEffect } from 'react'
import {
  Container,
  Image,
  TitleContainer,
  Title,
  ThumbnaiContainer,
  ThumbnaiImage,
  Line,
  FlatList,
  ScrollView,
  CalloutContainer,
  TextCallout
} from './styles'
import { Dimensions, Linking } from 'react-native'

import MapView, { Marker, Callout, PROVIDER_GOOGLE } from 'react-native-maps'
import { FontAwesome } from 'react-native-vector-icons'
import Stars from 'react-native-stars'
import { useNavigation, useRoute } from '@react-navigation/native'
import mapMarker from '../../../assets/imgs/marker/map-marker.png'

import ModalErrorMessage from '../../components/Modals/ModalErrorMessage'
import LoadingScreen from '../../components/Loading'
import MenuItems from '../../components/MenuItems'
import AboutText from '../../components/AboutText'
import Map from '../../components/Map'
import UsersFeedback from '../../components/UsersFeedback'

import ModalComments from '../../components/Modals/ModalComments'
import ModalAddress from '../../components/Modals/ModalAddress'
import ModalSendComment from '../../components/Modals/ModalSendComment'
import ModalVideo from '../../components/Modals/ModalVideo'

import { useGlobalContext } from '../../contexs/GlobalContext'
import api from '../../services/api'

export default function MainScreen() {

  const {
    isLoadedMainScreen,
    setIsLoadedMainScreen,
    place,
    setPlace,
    setModalErrorMessageVisible,
    setModalCommentsVisible,
    setModalAddressVisible,
    setModalVideoVisible
  } = useGlobalContext()

  const navigation = useNavigation()
  const route = useRoute()
  const params = route.params

  function handleOpenGoogleMapsRoutes() {
    Linking.openURL(`https://www.google.com/maps/dir/?api=1&destination=${place.latitude},${place.longitude}`)
  }

  useEffect(() => {
    async function getData() {
      try {
        const response = await api.get(`/places/${params.id}`)
        setPlace(response.data)
        setIsLoadedMainScreen(true)
      } catch (err) {
        setIsLoadedMainScreen(false)
        setTimeout(
          () => { setModalErrorMessageVisible(true) },
          3000
        )
      }
    }
    getData()
  }, [])

  return (
    <Container>
      {isLoadedMainScreen ?
        <>
          <FlatList
            keyExtractor={item => item.title}
            data={place.commentaries}
            contentContainerStyle={{ flexGrow: 1 }}
            ListHeaderComponent={() => {
              return (
                <>
                  <ScrollView horizontal={true} pagingEnabled>
                    {place.images.map(image => {
                      return (
                        <Image style={{ width: Dimensions.get('window').width }}
                          key={image.id}
                          source={{ uri: image.url }}
                        />
                      )
                    })}
                  </ScrollView>
                  <TitleContainer>
                    <Title>{place.title}</Title>
                  </TitleContainer>
                  <ThumbnaiContainer>
                    <ThumbnaiImage
                      source={{ uri: place?.images?.[0]?.url }}
                    />
                  </ThumbnaiContainer>
                  <MenuItems
                    onClickCallButton={() => { Linking.openURL(`tel:${place.phone}`) }}
                    onClickServicesButton={() => navigation.navigate('ServicesScreen')}
                    onClickAddressButton={() => { setModalAddressVisible(true) }}
                    onClickCommentsButton={() => { setModalCommentsVisible(true) }}
                    onClickVideoButton={() => { setModalVideoVisible(true) }}
                  />
                  <Line />
                  <AboutText
                    aboutText={place.text}
                  />
                  <Map
                    onClickLocationButton={handleOpenGoogleMapsRoutes}
                    location={place.address}
                    MapView={
                      <MapView
                        style={{
                          width: '100%',
                          height: 100
                        }}
                        provider={PROVIDER_GOOGLE}
                        initialRegion={{
                          latitude: place.latitude === undefined ? 0 : place.latitude,
                          longitude: place.longitude === undefined ? 0 : place.longitude,
                          latitudeDelta: 0.008,
                          longitudeDelta: 0.008
                        }}
                      >
                        <Marker
                          icon={mapMarker}
                          calloutAnchor={{
                            x: 1.80,
                            y: 0.75,
                          }}
                          coordinate={{
                            latitude: place.latitude === undefined ? 0 : place.latitude,
                            longitude: place.longitude === undefined ? 0 : place.longitude,
                          }}
                        >
                          <Callout
                            tooltip={true}
                            onPress={() => { setModalAddressVisible(true) }}>
                            <CalloutContainer>
                              <TextCallout>
                                {place.title}
                              </TextCallout>
                            </CalloutContainer>
                          </Callout>
                        </Marker>
                      </MapView>
                    }
                  />
                </>
              )
            }}
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
        </>
        :
        <LoadingScreen />}
      <ModalErrorMessage />
      <ModalComments />
      <ModalAddress />
      <ModalSendComment />
      <ModalVideo />
    </Container>
  )
}