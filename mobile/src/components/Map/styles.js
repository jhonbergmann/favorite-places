import styled from 'styled-components/native'

export const Container = styled.View`
  flex-direction: column;
`;

export const LocationFooterContainer = styled.View`
  width: 100%;
  height: 25px;  
  background-color: #e08b00;
  flex-direction: row-reverse;
`;

export const LocationText = styled.Text`
  left: 50px;
  color: #FFF;
  text-align: center;
`;

export const LocationButton = styled.TouchableOpacity`
  position: absolute;
  bottom: 5px;
  left: 5px;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 20px;
  background-color: #FFF;
`;