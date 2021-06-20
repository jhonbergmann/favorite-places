import React, { useState, useEffect } from 'react'
import {
  Container,
  Title,
  Image,
  Text
} from './styles'
import { Alert } from 'react-native'

import { useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import AppIntroSlider from 'react-native-app-intro-slider'
import IconPrevButton from 'react-native-vector-icons/Ionicons'
import IconNextButton from 'react-native-vector-icons/Ionicons'
import IconDoneButton from 'react-native-vector-icons/Ionicons'
import NavigationAfterIntro from '../../components/NavigationAfterIntro'
import slides from '../../services/slides.json'

export default function IntroSlider() {

  const [introShown, setIntroShown] = useState(false)

  const navigation = useNavigation()

  function handleNavigationToHome() {
    navigation.navigate('SignIn')
  }

  const saveResultShowViewSliders = async () => {
    try {
      await AsyncStorage.setItem("@KeySlider", JSON.stringify(introShown))
    } catch (err) {
      Alert.alert(
        'Ops!',
        'Erro ao Salvar'
      )
    }
  }

  const loadResultShowViewSliders = async () => {
    try {
      let introShown = await AsyncStorage.getItem("@KeySlider")

      if (introShown !== null) {
        setIntroShown(JSON.parse(true))
      }
    } catch (err) {
      alert(err)
    }
  }

  useEffect(() => {
    loadResultShowViewSliders()
  }, [])

  function renderSlides({ item }) {
    return (
      <Container>
        <Title>
          {item.title}
        </Title>
        <Image style={{ resizeMode: 'contain' }}
          source={{ uri: item.image }}
        />
        <Text>
          {item.text}
        </Text>
      </Container>
    )
  }

  if (introShown === true) {
    return <NavigationAfterIntro />
  } else {
    return (
      <AppIntroSlider
        renderItem={renderSlides}
        data={slides}
        activeDotStyle={{
          backgroundColor: '#FFF',
          width: 100
        }}
        showNextButton={true}
        showPrevButton={true}
        dotClickEnabled={true}
        renderNextButton={() => <IconNextButton name='arrow-forward' color='#FFF' size={35} />}
        renderPrevButton={() => <IconPrevButton name='arrow-back' color='#FFF' size={35} />}
        renderDoneButton={() => <IconDoneButton name='md-checkmark' color='#FFF' size={35} />}
        onDone={() => { handleNavigationToHome(), saveResultShowViewSliders() }}
      />
    )
  }
}