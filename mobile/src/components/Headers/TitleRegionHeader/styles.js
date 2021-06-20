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

export const ToLocalizationContainer = styled.View`
  align-items: center;
  flex-direction: row;
  align-self: flex-end;
  margin-bottom: 2%;
`;

export const ToSearchButtonContainer = styled.TouchableOpacity`
    align-self: flex-end;
    padding: 10px;
    transform: scaleX(-1); /* invertendo icon (espelhar/flip) */
`;

export const LocalizationText = styled.Text`
  color: #FFF
`;