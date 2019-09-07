import React from "react";

import {
  Container,
  Cover,
  Title,
  PriceCaption,
  Content,
  Image
} from "./styles";
import { formatPrice } from "../../util/format";
import pepper from "../../assets/pepper.jpg";
import apple from "../../assets/apple.jpg";
import tomatoes from "../../assets/tomatoes.jpg";

export default function Card({ data }) {
  return (
    <Container>
      <Cover>
        <Image
          source={{
            uri: data.Skus[0].Images[0].ImageUrl
          }}
        />
      </Cover>
      <Content>
        <Title>
          {data.Skus[0].Name.length >= 50
            ? `${data.Skus[0].Name.substr(0, 50)}...`
            : `${data.Skus[0].Name}`}
        </Title>
        <PriceCaption>
          {formatPrice(data.Skus[0].Sellers[0].Price)}
        </PriceCaption>
      </Content>
    </Container>
  );
}
