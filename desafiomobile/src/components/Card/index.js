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
            uri:
              "https://polishop.vteximg.com.br/arquivos/ids/618462/mktplace-rotating_air_brush_diamond_brilliance-01-2.jpg?v=636869578537130000"
          }}
        />
      </Cover>
      <Content>
        <Title>Escova Rotating Air Brush Diamond</Title>
        <PriceCaption>{formatPrice(449.9)}</PriceCaption>
      </Content>
    </Container>
  );
}
