
import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  flex-direction: column;
`;

export const Image = styled.Image`
  height: 250px;
`;

export const TitleContainer = styled.View`
  flex-direction: row;
`;

export const Title = styled.Text`
 font-size: 25px;
 color: #e08b00;
 margin: 10px;
`;

export const ThumbnaiContainer = styled.View`
  position: absolute;
  align-self: flex-end;
  top: 130px;
  right: 5%;
  width: 100px;
  height: 100px;
  align-items: center;
  justify-content: center;
  border-radius: 50px;
  background-color: #FFF;
`;

export const ThumbnaiImage = styled.Image`
  height: 90px;
  width: 90px;
  border-radius: 45px;
`

export const Line = styled.View`
  border-width: 0.3px;
  border-color: #ebebeb;
`;

export const FlatList = styled.FlatList`
`;

export const ScrollView = styled.ScrollView`
`;

export const CalloutContainer = styled.View`
  align-items: center;
  justify-content: center;
  height: 40px;
  width: 80px;
  border-radius: 5px;
  background-color: #e08b00;
`;

export const TextCallout = styled.Text`
  color: #FFF
`;