import React from "react";
import { View, Text, Button, ScrollView } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { Header, SearchBar } from "react-native-elements";
import {
  Container,
  Subtitle,
  ItemsLayout,
  ColumnOne,
  ColumnTwo
} from "./styles";
import Card from "../../components/Card";

function Main() {
  return (
    <>
      <Header
        statusBarProps={{ barStyle: "light-content" }}
        rightComponent={<Icon name="shopping-cart" size={25} color="white" />}
        centerComponent={{ text: "Vitrini", style: { color: "#fff" } }}
        containerStyle={{
          backgroundColor: "black",
          justifyContent: "space-around"
        }}
      />
      <Container>
        <ScrollView>
          <Subtitle>Produtos</Subtitle>
          <ItemsLayout>
            <ColumnOne>
              <Card />
            </ColumnOne>
            <ColumnTwo>
              <Card />
            </ColumnTwo>
          </ItemsLayout>
        </ScrollView>
      </Container>
    </>
  );
}

export default Main;
