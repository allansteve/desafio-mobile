import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
`;

export const Title = styled.Text`
  font-size: 20px;
  color: #fff;
  font-weight: bold;
  align-self: center;
  margin-top: 25px;
`;

export const List = styled.FlatList.attrs({
  showVerticalScrollIndicator: false,
  numColumns: 2
})``;

export const Subtitle = styled.Text`
  font-size: 20px;
  color: #3c4560;
  font-weight: 500;
  text-align: center;
  text-transform: uppercase;
`;
