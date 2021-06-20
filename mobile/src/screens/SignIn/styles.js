import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  justify-content: flex-end;
  align-items: center;
  background-color: #e08b00;
`;

export const WelcomeText = styled.Text`
  text-align: left;
  width: 100%;
  padding: 10%;
  color: #FFF;
  font-weight: bold;
  font-size: 30px;
`;

export const SignInContain = styled.View`
  background-color: #FFF;
  height: 80%;
  border-top-left-radius: 50px;
  border-top-right-radius: 50px;
  padding: 20px;
  width: 95%;
`;

export const InputContainer = styled.View`
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

export const ButtonSignIn = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  background-color: #e08b00;
  height: 70px;
  border-radius: 50px;
  margin-bottom: 15px;
`;

export const ButtonSignUp = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  background-color: #FFF;
  border-width: 1px;
  border-color: #e08b00;
  height: 70px;
  border-radius: 50px;
`;

export const TitleButtonSignIn = styled.Text`
  color: #FFF;
  font-weight: bold;
`;

export const TitleButtonSignUp = styled.Text`
  color: #e08b00;
`;

export const ButtonVisiblePassword = styled.TouchableOpacity`
`;

export const IgnoreView = styled.View`
  width: 25px;
`

export const Text = styled.Text`
  text-align: center;
  color: #e08b00;
  padding: 20px;
`;