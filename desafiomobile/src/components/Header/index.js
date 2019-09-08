import React from "react";
import { Header } from "react-native-elements";
import { Container } from "./styles";

export default function StatusBar({
  ComponentCenter,
  ComponentLeft,
  ComponentRight
}) {
  return (
    <Container>
      <Header
        statusBarProps={{ barStyle: "light-content" }}
        leftComponent={ComponentLeft}
        rightComponent={ComponentRight}
        centerComponent={ComponentCenter}
        containerStyle={{
          backgroundColor: "black",
          justifyContent: "space-around"
        }}
      />
    </Container>
  );
}
