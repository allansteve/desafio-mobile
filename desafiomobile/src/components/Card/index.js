import React from "react";

import {
  Container,
  Cover,
  Title,
  PriceList,
  Price,
  BestInstallment,
  Content,
  Image
} from "./styles";
import { formatPrice } from "../../util/format";

export default function Card({ data }) {
  verifyInstallment = item => {
    let valListPrice = item.Skus[0].Sellers[0].ListPrice.toFixed(0);
    if (valListPrice !== "0") {
      return (
        <BestInstallment>
          {`${
            item.Skus[0].Sellers[0].BestInstallment.Count
          } x de ${item.Skus[0].Sellers[0].BestInstallment.Value.toFixed(2)}`}
        </BestInstallment>
      );
    }
  };

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
        <Title>{data.Skus[0].Name}</Title>
        <PriceList>{formatPrice(data.Skus[0].Sellers[0].ListPrice)}</PriceList>
        <Price>{formatPrice(data.Skus[0].Sellers[0].Price)}</Price>
        {verifyInstallment(data)}
      </Content>
    </Container>
  );
}
