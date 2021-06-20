import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const ContainModalContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const ModalView = styled.View`
  background-color: #FFF;
  border-radius: 20px;
  align-items: center;
  width: 90%;
  height: 80%;
`;

export const SendSucessContainer = styled.View`
  height: 100%;
  align-items: center;
  justify-content: center;
`

export const ModalCloseButton = styled.TouchableOpacity`
  position: absolute;
  top: 15px;
  right: 15px;
  padding: 10px;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  background-color: #ff0000;
`;

export const ViewSpacing = styled.View`
  align-items: center;
  justify-content: center;
  justify-content: space-around;
  height: 100%;
`;

export const TitleText = styled.Text`
  position: absolute;
  top: 20px;
  left: 15px;
  background-color: #e08b00;
  padding: 10px;
  border-radius: 10px;
  color: #FFF;
  opacity: 0.8;
`;

export const CommentTextInput = styled.TextInput`
  margin-top: 18%;
  background-color: #e08b00;
  color: #FFF;
  width: 250px;
  height: 120px;
  border-radius: 10px;
`;

export const RatingContainContainer = styled.View`
  align-items: center;
`;

export const SendCommentButton = styled.TouchableOpacity`
  padding: 5%;
  background-color: #e08b00;
  border-radius: 10px;
`;

export const SendCommentButtonText = styled.Text`
  color: #FFF;
`;

export const TextMensageSuccess = styled.Text`
  color: #e08b00;
  font-size: 18px;
`;