import React, { useState } from 'react'
import {
  ScrollViewContainer,
  TitleText,
  LabelText,
  ImagesView,
  ImageItem,
  ThumbnailView,
  ThumbnaiItem,
  NextButton,
  NextButtonText,
  IncludeImagesButton
} from './styles'
import { StyleSheet } from 'react-native'

import { Input } from 'react-native-elements'
import { MaterialIcons } from 'react-native-vector-icons'
import { useRoute } from '@react-navigation/native'
import ImagePicker from 'react-native-image-crop-picker'
import { useNavigation } from '@react-navigation/native'
import api from '../../../services/api'

export default function PlaceData() {

  const [title, setTitle] = useState('')
  const [city, setCity] = useState('')
  const [neighborhood, setNeighborhood] = useState('')
  const [address, setAddress] = useState('')
  const [phone, setPhone] = useState('')
  const [youtube, setYoutube] = useState('')
  const [text, setAboutText] = useState('')
  const [images, setImages] = useState([])

  const [titleErrorValidation, setTitleErrorValidation] = useState(null)
  const [cityErrorValidation, setCityErrorValidation] = useState(null)
  const [neighborhoodErrorValidation, setNeighborhoodErrorValidation] = useState(null)
  const [addressErrorValidation, setAddressErrorValidation] = useState(null)
  const [phoneErrorValidation, setPhoneErrorValidation] = useState(null)
  const [aboutTextErrorValidation, setAboutTextErrorValidation] = useState(null)
  const [imagesErrorValidation, setImagesErrorValidation] = useState(null)

  function validation() {
    let error = false

    /* regExp Phone */
    const regExp = /^\(?[1-9]{2}\)? ?(?:[2-8]|9[1-9])[0-9]{3}\-?[0-9]{4}$/

    setTitleErrorValidation(null)
    setCityErrorValidation(null)
    setNeighborhoodErrorValidation(null)
    setAddressErrorValidation(null)
    setPhoneErrorValidation(null)
    setAboutTextErrorValidation(null)

    if (title == '') {
      error = true
      setTitleErrorValidation('Preencha o campo de título')
    }
    if (city == '') {
      error = true
      setCityErrorValidation('Preencha o campo de cidade')
    }
    if (neighborhood == '') {
      error = true
      setNeighborhoodErrorValidation('Preencha o campo de bairro')
    }
    if (address == '') {
      error = true
      setAddressErrorValidation('Preencha o campo de endereço')
    }
    if (!regExp.test(String(phone))) {
      error = true
      setPhoneErrorValidation('Preencha o compo de telefone')
    }
    if (text == '') {
      error = true
      setAboutTextErrorValidation('Preencha o campo de sobre')
    }
    return !error
  }

  async function handleCreatePlace() {
    try {
      const { latitude, longitude } = params.position
      const data = new FormData()
      data.append('title', title)
      data.append('latitude', String(latitude))
      data.append('longitude', String(longitude))
      data.append('city', city)
      data.append('neighborhood', neighborhood)
      data.append('address', address)
      data.append('phone', phone)
      data.append('youtube', youtube)
      data.append('text', text)

      images.forEach((image, index) => {
        data.append('images', {
          name: `image_${index}.jpg`,
          type: 'image/jpg',
          uri: image,
        })
      })
      await api.post('places', data)
      navigation.navigate('HomeScreen')
    } catch (err) {
      console.log(error)
    }
  }

  function handleSelectImages() {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true
    }).then(image => {
      setImages([...images, image.path])
    })
  }

  function saveData() {
    if (validation()) {
      handleCreatePlace()
    }
  }

  const navigation = useNavigation()
  const route = useRoute()
  const params = route.params

  const styles = StyleSheet.create({
    input: {
      fontSize: 14,
      backgroundColor: '#FFF',
      borderWidth: 1.5,
      borderColor: '#d3e2e6',
      borderRadius: 10,
      height: 55,
      paddingVertical: 18,
      paddingHorizontal: 24,
      textAlignVertical: 'top'
    },
    borderBottomNone: {
      borderBottomWidth: 0
    }
  })

  return (
    <ScrollViewContainer contentContainerStyle={{ padding: 24 }}>
      <TitleText>Dados</TitleText>
      <LabelText>Título</LabelText>
      <Input
        inputContainerStyle={styles.borderBottomNone}
        style={styles.input}
        value={title}
        placeholder={'Centro de Porto Alegre'}
        onChangeText={text => (setTitle(text), setTitleErrorValidation(null))}
        errorMessage={titleErrorValidation}
      />
      <LabelText>Cidade</LabelText>
      <Input
        inputContainerStyle={styles.borderBottomNone}
        style={styles.input}
        value={city}
        placeholder={'Porto Alegre'}
        onChangeText={text => (setCity(text), setCityErrorValidation(null))}
        errorMessage={cityErrorValidation}
      />
      <LabelText>Bairro</LabelText>
      <Input
        inputContainerStyle={styles.borderBottomNone}
        style={styles.input}
        value={neighborhood}
        placeholder={'Centro'}
        onChangeText={text => (setNeighborhood(text), setNeighborhoodErrorValidation(null))}
        errorMessage={neighborhoodErrorValidation}
      />
      <LabelText>Endereço</LabelText>
      <Input
        inputContainerStyle={styles.borderBottomNone}
        style={styles.input}
        value={address}
        placeholder={'Centro Histórico'}
        onChangeText={text => (setAddress(text), setAddressErrorValidation(null))}
        errorMessage={addressErrorValidation}
      />
      <LabelText>Telefone</LabelText>
      <Input
        inputContainerStyle={styles.borderBottomNone}
        style={styles.input}
        value={phone}
        placeholder={'(51) 3286-1811'}
        keyboardType={'phone-pad'}
        onChangeText={text => (setPhone(text), setPhoneErrorValidation(null))}
        errorMessage={phoneErrorValidation}
      />
      <LabelText>ID do Youtube</LabelText>
      <Input
        inputContainerStyle={styles.borderBottomNone}
        style={styles.input}
        value={youtube}
        placeholder={'MEjZglF27Qk - (opcional)'}
        onChangeText={text => (setYoutube(text))}
      />
      <LabelText>Sobre</LabelText>
      <Input
        inputContainerStyle={styles.borderBottomNone}
        style={[styles.input, { height: 110 }]}
        multiline
        value={text}
        placeholder={'O Centro Histórico é um bairro da cidade brasileira de Porto Alegre, capital do estado do Rio Grande do Sul.'}
        onChangeText={text => (setAboutText(text), setAboutTextErrorValidation(null))}
        errorMessage={aboutTextErrorValidation}
        maxLength={300}
      />
      <ImagesView horizontal>
        {images.map(image => {
          return (
            <ImageItem
              key={image}
              source={{ uri: image }}
            />
          )
        })}
      </ImagesView>
      <LabelText style={{ marginTop: 10 }}>Fotos</LabelText>
      <IncludeImagesButton onPress={handleSelectImages}>
        <MaterialIcons
          name='add-photo-alternate'
          size={50}
          color='#e08b00'
        />
      </IncludeImagesButton>

      <NextButton onPress={saveData}>
        <NextButtonText>Cadastrar</NextButtonText>
      </NextButton>
    </ScrollViewContainer>
  )
}