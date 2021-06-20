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
  align-items: center;
  justify-content: center;
  justify-content: space-around;
  height: 100%;
`;

export const TopMessage = styled.Text`
  margin-top: 10%;
  font-size: 50px;
  font-weight: bold;
  color: #e08b00;
`;

export const BottomMessage = styled.Text`
  margin-bottom: 10%;
  font-size: 30px;
  font-weight: bold;
  color: #e08b00;
`;