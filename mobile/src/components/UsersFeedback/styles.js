import styled from 'styled-components/native'

export const Container = styled.View`
  flex-direction: column;
  background-color: #FFF;
  padding: 10px;
`

export const UserFeedbackContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Avatar = styled.Image`
  height: 60px;
  width: 60px;
  border-radius: 30px;
`;

export const Content = styled.View`
  flex: 1;
  flex-direction: column;
  padding: 5px;
`;

export const Name = styled.Text`
  font-weight: bold;
  color: #e08b00;
`;

export const EvaluationContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.Text`
  color: #e08b00;
`;

export const LittleStars = styled.Text`
  color: #e08b00;
`;

export const Comment = styled.Text`
  color: #e08b00;
`;