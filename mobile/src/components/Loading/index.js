import React from 'react'
import { LottieViewContainer } from './styles'

import LottieView from 'lottie-react-native'
import starLoading from '../../lottie/star-loading.json'

export default function Loading() {
  return (
    <LottieViewContainer>
      <LottieView
        style={{ width: 300 }}
        resizeMode='contain'
        source={starLoading}
        autoSize
        autoPlay
        loop
      />
    </LottieViewContainer>
  )
}