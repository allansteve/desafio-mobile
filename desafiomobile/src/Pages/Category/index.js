import React, { useEffect, useState } from "react";
import { View, Text, FlatList, TouchableOpacity, Modal } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

import StatusBar from "../../components/Header";
const baseUrl = "https://desafio.mobfiq.com.br/";
const pathUrl = "StorePreference/CategoryTree";
import {
  Container,
  Subtitle,
  Title,
  CategoryView,
  CategoryText,
  // List,
  // HeaderRight,
  HeaderLeft
} from "./styles";

export default function Category({ navigation }) {
  const [categories, setCategories] = useState([]);
  const [subcategories, setSubcategories] = useState([]);
  const [categoryText, setCategoryText] = useState("");
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    async function loadCategories() {
      const response = await fetch(`${baseUrl}${pathUrl}`, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        }
      });
      const repositories = await response.json();

      setCategories(repositories.Categories);
    }
    loadCategories();
  }, []);

  renderComponentCenter = () => {
    return <Title>Vitrini</Title>;
  };

  renderComponentRight = () => {
    return (
      <HeaderRight>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Search");
          }}
        >
          <Icon name="search" size={27} color="white" />
        </TouchableOpacity>
        <Icon name="shopping-cart" size={25} color="white" />
      </HeaderRight>
    );
  };

  renderComponentLeftModal = () => {
    return (
      <HeaderLeft>
        <TouchableOpacity
          onPress={() => {
            setModalVisible(!modalVisible);
          }}
        >
          <Icon name="chevron-left" size={27} color="white" />
        </TouchableOpacity>
      </HeaderLeft>
    );
  };
  renderComponentLeftBack = () => {
    return (
      <HeaderLeft>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Search");
          }}
        >
          <Icon name="chevron-left" size={27} color="white" />
        </TouchableOpacity>
      </HeaderLeft>
    );
  };
  HandleSubmit = item => {
    setSubcategories(item.SubCategories);
    setCategoryText(item.Name);
    setModalVisible(!modalVisible);
  };
  return (
    <>
      <StatusBar
        ComponentCenter={renderComponentCenter}
        ComponentLeft={renderComponentLeftBack}
      />
      <Container>
        <Subtitle>Categorias</Subtitle>

        <FlatList
          data={categories}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => {
                HandleSubmit(item);
              }}
            >
              <CategoryView>
                <CategoryText>{item.Name}</CategoryText>
                <Icon name="chevron-right" size={20} color="black" />
              </CategoryView>
            </TouchableOpacity>
          )}
        />
      </Container>
      <Modal visible={modalVisible}>
        <StatusBar
          ComponentCenter={renderComponentCenter}
          ComponentLeft={renderComponentLeftModal}
        />
        <Container>
          <Subtitle>{categoryText}</Subtitle>

          <FlatList
            data={subcategories}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <CategoryView>
                <CategoryText>{item.Name}</CategoryText>
              </CategoryView>
            )}
          />
        </Container>
      </Modal>
    </>
  );
}
