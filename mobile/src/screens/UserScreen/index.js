import React from 'react'
import {
  Container,
  Avatar,
  UserName,
  UserEmail,
  CenteredView,
  LogoutButton,
  LogoutButtonText
} from './style'

import { GoogleSignin } from '@react-native-google-signin/google-signin'
import { useNavigation } from '@react-navigation/native'
import { useGlobalContext } from '../../contexs/GlobalContext'

export default function UserScreen() {

  const { userInfo, setUserInfo } = useGlobalContext()
  const navigation = useNavigation()

  signOut = async () => {
    try {
      handleNavigationToSigIn()
      await GoogleSignin.revokeAccess()
      await GoogleSignin.signOut()
      setUserInfo({ user: null }) // Remember to remove the user from your app's state as well
    } catch (error) {
      console.error(error)
    }
  }

  function handleNavigationToSigIn() {
    navigation.navigate('SignIn')
  }

  return (
    <Container>
      <Avatar
        source={{ uri: userInfo?.user?.photo }}
      />
      <CenteredView>
        <UserName>
          {userInfo?.user?.givenName} {userInfo?.user?.familyName}
        </UserName>
        <UserEmail>
          {userInfo?.user?.email}
        </UserEmail>
      </CenteredView>
      <LogoutButton>
        <LogoutButtonText onPress={signOut}>
          Sair
        </LogoutButtonText>
      </LogoutButton>
    </Container>
  )
}