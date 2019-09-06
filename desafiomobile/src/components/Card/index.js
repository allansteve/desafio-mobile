import React from "react";

import {
  Container,
  Cover,
  Title,
  PriceCaption,
  Content,
  Image
} from "./styles";

import pepper from "../../assets/pepper.jpg";
import apple from "../../assets/apple.jpg";
import tomatoes from "../../assets/tomatoes.jpg";

export default function Card() {
  return (
    <>
      <Container>
        <Cover>
          <Image source={pepper} />
        </Cover>
        <Content>
          <Title>Pepper</Title>
          <PriceCaption>$ 2.99 each</PriceCaption>
        </Content>
      </Container>
      <Container>
        <Cover>
          <Image source={apple} />
        </Cover>
        <Content>
          <Title>apple</Title>
          <PriceCaption>$ 2.99 each</PriceCaption>
        </Content>
      </Container>
      <Container>
        <Cover>
          <Image source={tomatoes} />
        </Cover>
        <Content>
          <Title>tomatoes</Title>
          <PriceCaption>$ 2.99 each</PriceCaption>
        </Content>
      </Container>
    </>
  );
}
