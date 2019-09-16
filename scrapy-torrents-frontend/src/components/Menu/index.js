import React from 'react';
import { MdSearch } from 'react-icons/md';
import { Link } from 'react-router-dom';

import {
  Container,
  LinksContainer,
  Logo,
  Tipo,
  SearchInput,
  SearchButton,
  SearchContainer,
  SearchIcon,
} from './styles';

export default function Menu() {
  return (
    <Container>
      <LinksContainer>
        <Link to="/">
          <Logo>ScrapyTorrents</Logo>
        </Link>
        <Tipo>filmes</Tipo>
        <Tipo>series</Tipo>
      </LinksContainer>
      <SearchContainer>
        <SearchInput placeholder="Digite o nome do filme/serie aqui" />
        <SearchButton>
          <SearchIcon>
            <MdSearch />
          </SearchIcon>
        </SearchButton>
      </SearchContainer>
    </Container>
  );
}
