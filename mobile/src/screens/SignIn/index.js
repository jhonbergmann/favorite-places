import React, { useState, useEffect } from 'react'
import {
  Container,
  SignInContain,
  WelcomeText,
  InputContainer,
  ButtonSignIn,
  ButtonSignUp,
  TitleButtonSignIn,
  TitleButtonSignUp,
  ButtonVisiblePassword,
  IgnoreView,
  Text
} from './styles'
import { StyleSheet } from 'react-native'

import { useNavigation } from '@react-navigation/native'
import { Input } from 'react-native-elements'
import { FontAwesome, Feather, Ionicons } from 'react-native-vector-icons'
import { GoogleSignin, GoogleSigninButton, statusCodes } from '@react-native-google-signin/google-signin'
import { useGlobalContext } from '../../contexs/GlobalContext'

export default function SignIn() {

  const { setUserInfo } = useGlobalContext()

  useEffect(() => {
    GoogleSignin.configure({
      scopes: ['https://www.googleapis.com/auth/drive.readonly'], // what API you want to access on behalf of the user, default is email and profile
      webClientId: '829973220717-4838k65m0tqbvs672pnd7s8oqduf9fjb.apps.googleusercontent.com', // client ID of type WEB for your server (needed to verify user ID and offline access)
      offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
      // hostedDomain: '', // specifies a hosted domain restriction
      // loginHint: '', // [iOS] The user's ID, or email address, to be prefilled in the authentication UI if possible. [See docs here](https://developers.google.com/identity/sign-in/ios/api/interface_g_i_d_sign_in.html#a0a68c7504c31ab0b728432565f6e33fd)
      // forceCodeForRefreshToken: true, // [Android] related to `serverAuthCode`, read the docs link below *.
      // accountName: '', // [Android] specifies an account name on the device that should be used
      // iosClientId: '<FROM DEVELOPER CONSOLE>', // [iOS] optional, if you want to specify the client ID of type iOS (otherwise, it is taken from GoogleService-Info.plist)
      // googleServicePlistPath: '', // [iOS] optional, if you renamed your GoogleService-Info file, new name here, e.g. GoogleService-Info-Staging
    })
  }, [])

  function handleNavigationToHome() {
    navigation.navigate('HomeScreen')
  }

  login = async () => {
    try {
      await GoogleSignin.hasPlayServices()
      const userInfo = await GoogleSignin.signIn()
      handleNavigationToHome()
      setUserInfo(userInfo)
    } catch (error) {
      console.log({ error })
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (e.g. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
      } else {
        // some other error happened
      }
    }
  }

  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [isVisiblePassword, setIsVisiblePassword] = useState(true)
  /* regExp Email */
  const regExp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  const navigation = useNavigation()
  const styles = StyleSheet.create({
    input: {
      fontSize: 14,
      backgroundColor: '#FFF',
      height: 55,
      paddingVertical: 18,
      paddingHorizontal: 24,
      textAlignVertical: 'top'
    }
  })

  return (
    <Container>
      <WelcomeText>
        Bem-vindo!
      </WelcomeText>
      <SignInContain>
        <InputContainer>
          <Input
            placeholder={'Seu Email'}
            leftIcon={
              <FontAwesome
                name='user-o'
                size={25}
                color='#e08b00'
              />
            }
            rightIcon={
              regExp.test(String(email)) ?
                <Ionicons
                  name='ios-checkmark-circle-outline'
                  size={25}
                  color='#e08b00'
                />
                :
                <IgnoreView />
            }
            style={styles.input}
            onChangeText={text => (setEmail(text))}
          />
        </InputContainer>
        <InputContainer>
          <Input
            placeholder={'Sua Senha'}
            leftIcon={
              <Feather
                name='lock'
                size={25}
                color='#e08b00'
              />
            }
            rightIcon={isVisiblePassword === true ?
              <ButtonVisiblePassword onPress={() => setIsVisiblePassword(false)}>
                <FontAwesome
                  name='eye'
                  size={25}
                  color='#e08b00'
                />
              </ButtonVisiblePassword>
              :
              <ButtonVisiblePassword onPress={() => setIsVisiblePassword(true)}>
                <FontAwesome
                  name='eye-slash'
                  size={25}
                  color='#e08b00'
                />
              </ButtonVisiblePassword>
            }
            style={styles.input}
            onChangeText={text => (setPassword(text))}
            secureTextEntry={isVisiblePassword}
          />
        </InputContainer>
        <ButtonSignIn onPress={handleNavigationToHome}>
          <TitleButtonSignIn>
            Entrar
        </TitleButtonSignIn>
        </ButtonSignIn>
        <ButtonSignUp>
          <TitleButtonSignUp>
            Registrar
          </TitleButtonSignUp>
        </ButtonSignUp>
        <Text>
          Ou
        </Text>
        <GoogleSigninButton
          style={{ width: '100%', height: 70 }}
          size={GoogleSigninButton.Size.Wide}
          color={GoogleSigninButton.Color.Light}
          onPress={login} />
      </SignInContain>
    </Container>
  )
}