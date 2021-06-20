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
  height: 100%;
  align-items: center;
  margin-top: 20%;
  justify-content: space-around;
  width: 100%;
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

export const MessageText = styled.Text`
  text-align: center;
`;

export const LottieViewContainer = styled.View`
  align-items: center;
  justify-content: center;
  height: 100%;
`;

export const PlayOrPauseVideoButton = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  margin-bottom: 20%;
  width: 100px;
  height: 100px;
  border-radius: 50px;
  background-color: #e08b00;
`;