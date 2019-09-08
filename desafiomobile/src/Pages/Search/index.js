import React, { useState, useEffect } from "react";
import {
  View,
  ActivityIndicator,
  TouchableOpacity,
  TextInput
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { Header } from "react-native-elements";
import {
  Container,
  Subtitle,
  Title,
  List,
  HeaderRight,
  HeaderLeft
} from "./styles";
import Card from "../../components/Card";
const baseUrl = "https://desafio.mobfiq.com.br/";
const pathUrl = "Search/Criteria";
const Size = 10;

function Search({ navigation }) {
  const [product, setProduct] = useState([]);
  const [offset, setOffset] = useState(0);
  const [loading, setLoading] = useState(false);
  const [queryInput, setQueryInput] = useState("");

  renderFooter = () => {
    if (!loading) return null;
    return (
      <View>
        <ActivityIndicator animating size="large" />
      </View>
    );
  };

  renderComponentCenter = () => {
    return (
      <>
        <Title>Vitrini</Title>
      </>
    );
  };
  renderComponentRight = () => {
    return (
      <HeaderRight>
        <Icon name="search" size={27} color="white" />

        <Icon name="shopping-cart" size={25} color="white" />
      </HeaderRight>
    );
  };
  renderComponentLeft = () => {
    return (
      <HeaderLeft>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Main");
          }}
        >
          <Icon name="home" size={27} color="white" />
        </TouchableOpacity>
      </HeaderLeft>
    );
  };
  changeText = text => {
    setQueryInput(text);
  };
  handlerSumit = () => {
    async function loadProducts() {
      const response = await fetch(`${baseUrl}${pathUrl}`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          Offset: offset,
          Size: Size,
          Query: queryInput
        })
      });

      const repositories = await response.json();

      setProduct(repositories.Products);
    }
    loadProducts();
    setLoading(false);
  };

  useEffect(() => {
    async function loadProducts() {
      setOffset(offset + 10);
      const response = await fetch(`${baseUrl}${pathUrl}`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          Offset: offset,
          Size: Size,
          Query: queryInput
        })
      });

      const repositories = await response.json();

      setProduct([...product, ...repositories.Products]);
    }
    if (queryInput !== "") {
      loadProducts();
      setLoading(false);
    }
  }, [loading]);

  // useEffect(() => {
  //   async function loadProducts() {
  //     setOffset(offset + 10);
  //     const response = await fetch(`${baseUrl}${pathUrl}`, {
  //       method: "POST",
  //       headers: {
  //         Accept: "application/json",
  //         "Content-Type": "application/json"
  //       },
  //       body: JSON.stringify({
  //         Offset: offset,
  //         Size: Size,
  //         Query: queryInput
  //       })
  //     });

  //     const repositories = await response.json();

  //     setProduct([...product, ...repositories.Products]);
  //   }
  //   loadProducts();
  //   setLoading(false);
  // }, [loading]);

  return (
    <>
      <Header
        statusBarProps={{ barStyle: "light-content" }}
        leftComponent={renderComponentLeft}
        rightComponent={renderComponentRight}
        centerComponent={renderComponentCenter}
        containerStyle={{
          backgroundColor: "black",
          justifyContent: "space-around"
        }}
      />

      <Container>
        <View>
          <TextInput onChangeText={changeText} value={queryInput} />
          <TouchableOpacity
            onPress={() => {
              handlerSumit();
            }}
          >
            <Icon name="search" color="black" size={20} />
          </TouchableOpacity>
        </View>
        <List
          data={product}
          keyExtractor={(item, index) => index.toString()}
          onEndReached={() => setLoading(true)}
          onEndReachedThreshold={0.5}
          ListFooterComponent={renderFooter}
          renderItem={({ item }) => <Card data={item} />}
        />
      </Container>
    </>
  );
}

export default Search;
