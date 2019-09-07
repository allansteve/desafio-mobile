import React, { useState, useEffect } from "react";
import { View, Text, Button, ScrollView } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { Header, SearchBar } from "react-native-elements";
import {
  Container,
  Subtitle,
  ItemsLayout,
  ColumnOne,
  ColumnTwo,
  List
} from "./styles";
import api from "../../service/api";
import Card from "../../components/Card";
const baseURL = "https://desafio.mobfiq.com.br/";
const pathUrl = "Search/Criteria";
const Size = 10;

function Main() {
  const [product, setProduct] = useState([]);
  const [offset, setOffset] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function loadProducts() {
      const response = await fetch(`${baseURL}${pathUrl}`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          Offset: offset,
          Size: Size
        })
      });
      console.log("asdas");
      const repositories = await response.json();

      setProduct(repositories.Products);
    }
    loadProducts();
    setLoading(false);
  }, [loading]);

  return (
    <>
      <Header
        statusBarProps={{ barStyle: "light-content" }}
        rightComponent={<Icon name="shopping-cart" size={25} color="white" />}
        centerComponent={{
          text: "Vitrini",
          style: { color: "#fff", fontSize: 20, fontWeight: "bold" }
        }}
        containerStyle={{
          backgroundColor: "black",
          justifyContent: "space-around"
        }}
      />

      <Container>
        <Subtitle>Produtos</Subtitle>
        <List
          data={product}
          keyExtractor={(item, index) => index.toString()}
          onEndReachedThreshold={0.1}
          renderItem={({ item }) => <Card onCancel={() => {}} data={item} />}
        />
      </Container>
    </>
  );
}

export default Main;
