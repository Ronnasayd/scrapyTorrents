import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background: #7159c1;
  color: #fff;
  padding: 15px 30px;
  position: fixed;
  top: 0;
  z-index: 10;

  @media only screen and (max-width: 600px) {
    flex-direction: column;
  }
`;

export const Logo = styled.h1`
  cursor: pointer;
  color: #fff;
`;
export const LinksContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 400px;
  & a {
    text-decoration: none;
  }
  @media only screen and (max-width: 600px) {
    flex-direction: column;
    width: 100%;
    min-width: 200px;
  }
`;
export const Tipo = styled.span`
  cursor: pointer;
  font-size: 16px;
  padding: 6px;
  &:hover {
    border-bottom: 2px solid #fff;
  }
  @media only screen and (max-width: 600px) {
    margin-bottom: 5px;
  }
`;
export const SearchContainer = styled.div`
  display: flex;
  flex-direction: row;
  @media only screen and (max-width: 600px) {
    width: 98%;
  }
`;
export const SearchInput = styled.input`
  height: 36px;
  width: 300px;
  border-radius: 4px 0px 0px 4px;
  border: 0;
  font-size: 14px;
  line-height: 20px;
  padding: 10px;
  color: #555;
  &::placeholder {
    color: #999;
  }
`;
export const SearchButton = styled.button`
  background: none;
  border: 1px solid #fff;
  width: 50px;
  border-radius: 0px 4px 4px 0px;
  color: #fff;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    background: #5a4799;
  }
`;
export const SearchIcon = styled.span`
  font-size: 18px;
  font-weight: bold;
`;

export const Back = styled.span`
  color: #fff;
  font-size: 20px;
  cursor: pointer;

  &:hover {
    border-bottom: 2px solid #fff;
  }
`;
