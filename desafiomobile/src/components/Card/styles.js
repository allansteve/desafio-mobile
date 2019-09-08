import styled from "styled-components";

export const Container = styled.View`
  background: #fff;
  flex: 1;
  height: 270px;
  border-radius: 6px;
  margin: 10px;
  margin-top: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
`;

export const Cover = styled.View`
  width: 100%;
  height: 140px;
  padding: 5px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;

  justify-content: center;
  align-items: center;
`;

export const Image = styled.Image`
  width: 80%;
  height: 80%;
`;

export const Content = styled.View.attrs({})`
  padding-top: 10px;
  flex-direction: column;
  align-items: center;
  height: 100px;
`;

export const Title = styled.Text.attrs({
  numberOfLines: 3
})`
  padding: 0 10px;
  color: #3c4560;
  font-size: 14px;
  font-weight: 600;
  overflow: hidden;
`;

export const PriceList = styled.Text`
  color: #b8b3c3;
  font-size: 10px;
  font-weight: 600;
  margin-top: 4px;
  text-decoration: line-through;
`;

export const Price = styled.Text`
  color: #3cb371;
  font-size: 12px;
  font-weight: 600;
  margin-top: 4px;
`;

export const BestInstallment = styled.Text`
  color: #3cb371;
  font-size: 12px;
  font-weight: 600;
  margin-top: 4px;
`;
