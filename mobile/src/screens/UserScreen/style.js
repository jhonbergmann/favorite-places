import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

export const Avatar = styled.Image`
  height: 100px;
  width: 100px;
  border-radius: 50px;
  background-color: #e08b00;
`;

export const UserName = styled.Text`
  color: #FFF;
  font-size: 20px;
  margin-bottom: 20px;
`;

export const UserEmail = styled.Text`
  color: #FFF;
`;

export const CenteredView = styled.View`
  align-items: center;
  justify-content: center;
  background-color: #e08b00;
  width: 80%;
  height: 50%;
  border-radius: 20px;
`;

export const LogoutButton = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  background-color: #e08b00;
  padding: 5%;
  border-radius: 20px;
`;

export const LogoutButtonText = styled.Text`
  font-size: 15px;
  color: #FFF;
`;