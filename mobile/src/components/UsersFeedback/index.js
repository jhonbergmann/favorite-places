import React from 'react'
import {
  Container,
  UserFeedbackContainer,
  Avatar,
  Content,
  Name,
  EvaluationContainer,
  Title,
  LittleStars,
  Comment
} from './styles'

export default function UsersFeedback(props) {
  return (
    <Container>
      <UserFeedbackContainer>
        <Avatar
          source={{ uri: 'https://img2.gratispng.com/20180331/eow/kisspng-computer-icons-user-clip-art-user-5abf13db298934.2968784715224718991702.jpg' }}
        />
        <Content>
          <Name>
            {props.userName}
          </Name>
          <EvaluationContainer>
            <Title>
              {props.title}
            </Title>
            <LittleStars>
              {props.stars}
            </LittleStars>
          </EvaluationContainer>
          <Comment>
            {props.comment}
          </Comment>
        </Content>
      </UserFeedbackContainer>
    </Container>
  )
}