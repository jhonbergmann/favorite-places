import React from 'react'
import {
  Container,
  ToUserProfileContainer,
  Avatar,
  ToIcoTextHeaderCenterContainer,
  TextApp,
  ToSearchButtonContainer,
  SearchTextInput,
  SearchContainer,
  SearchCloseButton
} from './styles'

import { AntDesign, EvilIcons, Fontisto } from 'react-native-vector-icons'
import { useNavigation } from '@react-navigation/native'
import { useGlobalContext } from '../../../contexs/GlobalContext'

export default function SearchHeader() {

  const {
    places,
    setPlaces,
    onClickSearch,
    setOnClickSearch,
    search,
    setSearch,
    userInfo
  } = useGlobalContext()

  const searchFilter = (text) => {
    if (text) {
      const newData = places.filter((item) => {
        const itemPlace = item.title ? item.title.toUpperCase() : ''.toUpperCase()
        const textData = text.toUpperCase()

        return itemPlace.indexOf(textData) > -1
      })
      setPlaces(newData)
      setSearch(text)
    } else {
      setPlaces(places)
      setSearch(text)
    }
  }

  const navigation = useNavigation()

  return (
    <Container>
      <ToUserProfileContainer onPress={() => { navigation.navigate('UserScreen') }}>
        {userInfo ?
          <Avatar
            source={{ uri: userInfo?.user?.photo }}
          />
          :
          <EvilIcons
            name='user'
            size={35}
            color='#FFF'
          />
        }
      </ToUserProfileContainer>
      {onClickSearch === false ?
        <>
          <ToIcoTextHeaderCenterContainer>
            <TextApp style={{ fontFamily: 'Pacifico-Regular' }}>
              Favorite Places
            </TextApp>
          </ToIcoTextHeaderCenterContainer>
          <ToSearchButtonContainer
            onPress={() => { onClickSearch === true ? setOnClickSearch(false) : setOnClickSearch(true) }}>
            <AntDesign
              name='search1'
              size={25}
              color='#FFF'
            />
          </ToSearchButtonContainer>
        </>
        :
        <>
          <SearchContainer>
            <SearchTextInput
              autoFocus={true}
              placeholder="Pesquisar"
              value={search}
              onChangeText={text => { searchFilter(text) }}
            />
          </SearchContainer>
          <SearchCloseButton onPress={() => { setOnClickSearch(false), setSearch('') }}>
            <Fontisto
              name='close'
              size={25}
              color='#FFF'
            />
          </SearchCloseButton>
        </>
      }
    </Container >
  )
}