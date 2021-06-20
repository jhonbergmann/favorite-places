import React from 'react'
import { Container, Content } from './styles'

export default function AboutText(props) {
  return (
    <Container>
      <Content>
        {props.aboutText}
      </Content>
    </Container>
  )
}