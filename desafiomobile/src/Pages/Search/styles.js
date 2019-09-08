import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
`;

export const Title = styled.Text`
  font-size: 20px;
  color: #fff;
  font-weight: bold;
  align-self: center;
`;

export const HeaderRight = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;
export const HeaderLeft = styled.View``;

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

export const SearchView = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 34px;
  background: black;
  padding: 0 10px;
  border: 0;
`;

export const SearchTextInput = styled.TextInput`
  background: white;
  height: 24px;
  flex: 1;
  padding-left: 15px;
  margin: 0 15px;
  border-radius: 20px;
`;
