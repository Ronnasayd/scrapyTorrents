import styled from 'styled-components';

export const FlatList = styled.div`
  margin-top: 70px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  cursor: pointer;
  @media only screen and (max-width: 600px) {
    flex-direction: column;
  }
`;

export const ItemContainer = styled.div`
  flex-basis: calc(100% / 9);
  display: flex;
  flex-direction: column;
  position: relative;
  @media only screen and (max-width: 600px) {
    flex-basis: 50%;
  }

  &:hover .titulo {
    opacity: 0.8;
  }
  &:hover img {
    opacity: 0.8;
  }
  & a {
    text-decoration: none;
  }
`;

export const ItemTituloContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
  background: #6650ad;
  border-right: 0.5px solid rgba(255, 255, 255, 0.5);
  width: 100%;
  padding: 5px;
`;
export const ItemTituloText = styled.div`
  font-size: 14px;
  line-height: 18px;
  color: #fff;
  text-align: center;
  font-weight: 500;
`;
export const ItemImage = styled.img`
  width: 100%;
  height: 230px;
  @media only screen and (max-width: 600px) {
    height: 100%;
  }
`;

export const ItemIMDB = styled.div`
  position: absolute;
  font-size: 12px;
  bottom: 65px;
  right: 5px;
  background: #5a4799;
  color: #fff;
  padding: 10px;
  border-radius: 4px;
  border: 0.5px solid rgba(255, 255, 255, 0.5);
  font-weight: bold;
`;

export const ItemAno = styled.div`
  position: absolute;
  font-size: 12px;
  top: 5px;
  left: 5px;
  background: #5a4799;
  color: #fff;
  padding: 10px;
  border-radius: 4px;
  border: 0.5px solid rgba(255, 255, 255, 0.5);
  font-weight: bold;
`;
