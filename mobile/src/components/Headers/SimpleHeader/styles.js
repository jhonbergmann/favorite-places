import styled from 'styled-components/native'

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: #e08b00;
  height: 70px;
`;

export const ToBackButtonContainer = styled.TouchableOpacity`
  align-self: flex-end;
  padding: 10px;
`;

export const ToIcoTextHeaderCenterContainer = styled.View`
  align-items: center;
  align-self: flex-end;
  margin-bottom: 2%;
`;

export const TextApp = styled.Text`
  color:#FFF;
`

export const IgnoreView = styled.View`
  padding: 5%;
`;