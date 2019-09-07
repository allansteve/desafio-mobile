import styled from "styled-components";

export const Container = styled.View`
  background: #fff;
  height: 200px;
  width: 150px;
  border-radius: 14px;
  margin: 18px;
  margin-top: 20px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
`;

export const Cover = styled.View`
  width: 100%;
  height: 120px;
  border-top-left-radius: 14px;
  border-top-right-radius: 14px;
  overflow: hidden;
`;

export const Image = styled.Image`
  width: 100%;
  height: 100%;
`;

export const Content = styled.View`
  padding-top: 10px;
  flex-direction: column;
  align-items: center;
  height: 60px;
`;

export const Title = styled.Text`
  color: #3c4560;
  font-size: 15px;
  font-weight: 600;
`;

export const PriceCaption = styled.Text`
  color: #b8b3c3;
  font-size: 15px;
  font-weight: 600;
  margin-top: 4px;
`;
