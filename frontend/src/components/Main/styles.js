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
  overflow: hidden;
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
  animation: blured 700ms ease-out;
  animation-fill-mode: forwards;

  @media only screen and (max-width: 600px) {
    height: 100%;
  }

  @keyframes blured {
    0% {
      filter: blur(8px);
      opacity: 0;
    }
    100% {
      filter: blur(0px);
      opacity: 1;
    }
  }
`;

export const ItemIMDB = styled.div`
  position: absolute;
  font-size: 12px;
  bottom: 65px;
  background: #5a4799;
  color: #fff;
  padding: 10px;
  border-radius: 4px;
  border: 0.5px solid rgba(255, 255, 255, 0.5);
  font-weight: bold;
  animation: moveImdb 500ms ease-out;
  animation-fill-mode: forwards;

  @keyframes moveImdb {
    0% {
      right: -50px;
    }
    100% {
      right: 5px;
    }
  }
`;

export const ItemAno = styled.div`
  position: absolute;
  font-size: 12px;
  top: 5px;
  background: #5a4799;
  color: #fff;
  padding: 10px;
  border-radius: 4px;
  border: 0.5px solid rgba(255, 255, 255, 0.5);
  font-weight: bold;
  animation: moveAno 500ms ease-out;
  animation-fill-mode: forwards;

  @keyframes moveAno {
    0% {
      transform: translateX(-50px);
    }
    100% {
      transform: translateX(5px);
    }
  }
`;

export const Spinner = styled.div`
  border-radius: 50%;
  width: 40px;
  height: 40px;
  border: 8px solid rgb(209, 209, 209);
  border-top: 8px solid #5a4799;
  margin: 0 auto;
  animation: spin 2s linear infinite;
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
`;
