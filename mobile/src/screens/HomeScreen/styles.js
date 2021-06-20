import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
`;

export const ImageBlurBackground = styled.ImageBackground`
  justify-content: space-around;
  align-items: center;
  height: 100%;
`;

export const CarouselContainContainer = styled.View`
`;

export const SlideView = styled.View`
  height: 350px;
`;

export const ItemButtonContainer = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  width: 320px;
  height: 320px;
`;

export const ItemImage = styled.Image`
  width: 320px;
  height: 320px;
  border-radius: 15px;
`;

export const ItemTitleText = styled.Text`
  position: absolute;
  color: #FFF;
  bottom: 15px;
  left: 15px;
  font-weight: bold;
`;

export const IconLocationContainer = styled.View`
  position: absolute;
  top: 15px;
  right: 15px;
`;

export const ThumbnaiImageContainer = styled.View`
  position: absolute;
  bottom: 15px;
  right: 15px; 
  width: 60px;
  height: 60px;
  border-radius: 30px;
  align-items: center;
  justify-content: center;
  background-color: #FFF;
`;

export const ThumbnaiImage = styled.Image`
  height: 50px;
  width: 50px;
  border-radius: 25px;
`;

export const AddItemButtonContainer = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 80px;
  border-radius: 40px;
  background-color: #FFF;
`;

export const AddItemButton = styled.View`
  align-items: center;
  justify-content: center;
  position: absolute;
  right: 0;
  background-color: #e08b00;
  width: 80px;
  height: 80px;
  border-radius: 40px;
`;

export const AddItemText = styled.Text`
  position: absolute;
  left: 30px;
  font-size: 18px;
  color: #e08b00;
`;