import React, { useEffect } from 'react';
import { MdSearch, MdKeyboardArrowLeft } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
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
  Back,
} from './styles';
import api from '../../services/api';

export default function Menu() {
  const dispatch = useDispatch();
  const { search } = useSelector((store) => store);

  async function newSearch() {
    const inputTag = document.getElementById('search');
    if (inputTag.value) {
      await dispatch({ type: 'NEW_SEARCH', search: inputTag.value });
    }
    inputTag.value = '';
  }
  async function getSearchData() {
    if (search) {
      const { data } = await api.get(`/search/${search}`);
      await dispatch({ type: 'SEARCH_DATA', search_data: data });
    }
  }

  useEffect(() => {
    getSearchData();
    // eslint-disable-next-line
  }, [search]);

  return (
    <Container>
      <LinksContainer>
        {window.location.href.includes('show') && (
          <Link to="/">
            <Back>
              <MdKeyboardArrowLeft />
            </Back>
          </Link>
        )}
        <a href="/">
          <Logo>ScrapyTorrents</Logo>
        </a>

        <Tipo
          onClick={async () => {
            await dispatch({ type: 'CHANGE_TIPO', tipo: 'filme' });
          }}
        >
          filmes
        </Tipo>
        <Tipo
          onClick={async () => {
            await dispatch({ type: 'CHANGE_TIPO', tipo: 'serie' });
          }}
        >
          series
        </Tipo>
      </LinksContainer>
      <SearchContainer>
        <SearchInput
          placeholder="Digite o nome do filme/serie aqui"
          id="search"
        />

        <SearchButton onClick={newSearch}>
          <SearchIcon>
            <MdSearch />
          </SearchIcon>
        </SearchButton>
      </SearchContainer>
    </Container>
  );
}
