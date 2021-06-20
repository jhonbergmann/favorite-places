import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
`;

export const ContainModalContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const ModalView = styled.View`
  background-color: #FFF;
  border-radius: 20px;
  width: 90%;
  height: 80%;
`;

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

export const FlatListModalContainer = styled.View`
  margin-top: 30%;
  height: 55%;
`;

export const CommentButton = styled.TouchableOpacity`
  position: absolute;
  bottom: 50px;
  left: 35%;
  padding: 5%;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  background-color: #e08b00;
`;

export const CommentButtonText = styled.Text`
  color: #FFF;
`;

export const IgnoreView = styled.View`
  padding: 5%;
`;

export const LottieViewContainer = styled.View`
  align-items: center;
  justify-content: center;
  height: 100%;
`;
