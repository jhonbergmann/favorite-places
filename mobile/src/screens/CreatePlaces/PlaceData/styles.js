import styled from 'styled-components/native'

export const ScrollViewContainer = styled.ScrollView`
  flex: 1;
  background-color: #FFF;
`;

export const TitleText = styled.Text`
  color: #e08b00;
  margin-bottom: 30px;
  font-size: 24px;
`;

export const LabelText = styled.Text`
  color: #e08b00;
  margin-bottom: 5px;
`;

export const ImagesView = styled.ScrollView`
  flex-direction: row;
`;

export const ImageItem = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 10px;
  margin: 10px;
`;

export const ThumbnailView = styled.View`
  align-items: center;
`;

export const ThumbnaiItem = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 50px;
  margin: 10px;
`;

export const IncludeImagesButton = styled.TouchableOpacity`
  border-style: dashed;
  background-color: #FFF;
  border-color: #d3e2e6;
  border-radius: 10px;
  border-width: 1.4px;
  margin-bottom: 30px;
  align-items: center;
  justify-content: center;
  height: 55px;
`;

export const NextButton = styled.TouchableOpacity`
  background-color: #e08b00;
  border-radius: 40px;
  align-items: center;
  justify-content: center;
  height: 70px;
`;

export const NextButtonText = styled.Text`
  color: #FFF;
`;