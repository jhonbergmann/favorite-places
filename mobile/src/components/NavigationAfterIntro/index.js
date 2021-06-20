import React, { useEffect } from 'react'
import { ColoredBackground } from './styles'

import { useNavigation } from '@react-navigation/native'

export default function NavigationAfterIntro() {

  const navigation = useNavigation()

  useEffect(() => {
    navigation.navigate('SignIn')
  }, [])

  return (
    <ColoredBackground />
  )
}