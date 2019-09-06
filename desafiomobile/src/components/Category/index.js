import React, {useEffect, useState} from "react";
import { View, FlatList, Text } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

import { Container } from "./styles";

import api from "../../service/api"

export default function category() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function loadCategory() {
      const categoriesList = await api.get("StorePreference/CategoryTree");
      setCategory(categoriesList);
    }

    loadCategory();
  },[]);


  return (
    <View>
      <View>
        <Icon name="arrow-back" size={20}></Icon>
        <Text>Categorias</Text>
      </View>

      <FlatList
        data={categories}
        renderItem={({item}) => (
          <Text>{item.Name}</Text>
        )}
      />

    </View>
  );
}
  );
}
