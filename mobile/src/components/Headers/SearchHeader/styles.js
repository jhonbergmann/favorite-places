import styled from 'styled-components/native'

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: #e08b00;
  height: 70px;
`;

export const ToUserProfileContainer = styled.TouchableOpacity`
  align-self: flex-end;
  padding: 10px;
`

export const Avatar = styled.Image`
  width: 25px;
  height: 25px;
  border-radius: 12.5px;
`;

export const TextApp = styled.Text`
  color:#FFF;
  font-size: 20px;
`

export const ToIcoTextHeaderCenterContainer = styled.View`
  align-items: center;
  align-self: flex-end;
  margin-bottom: 2%;
`;

export const ToSearchButtonContainer = styled.TouchableOpacity`
  align-self: flex-end;
  padding: 10px;
  transform: scaleX(-1); /* invertendo icon (espelhar/flip) */
`;

export const SearchContainer = styled.View`
  align-self: flex-end;
  margin-bottom: 2%;
  flex-direction: row;
  align-items: center;
  background-color: #FFF;
  border-radius: 5px;
  width: 60%;
  height: 60%;
`;

export const SearchTextInput = styled.TextInput`

`;

export const SearchCloseButton = styled.TouchableOpacity`
  align-self: flex-end;
  padding: 10px;
`;