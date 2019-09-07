import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: white;
`;

export const List = styled.FlatList.attrs({
  showVerticalScrollIndicator: false
  //contentContainerStyle: { padding: 30 }
})``;

export const Titlebar = styled.View`
  width: 100%;
  margin-top: 50px;
  padding-left: 80px;
`;

export const Name = styled.Text`
  font-size: 20px;
  color: #3c4560;
  font-weight: bold;
`;

export const Subtitle = styled.Text`
  font-size: 20px;
  color: #3c4560;
  font-weight: 500;
  margin-top: 10px;
  margin-left: 25px;
  text-transform: uppercase;
`;

export const ItemsLayout = styled.View`
  flex-direction: row;
  flex: 1;
`;

export const ColumnOne = styled.View``;

export const ColumnTwo = styled.View``;
