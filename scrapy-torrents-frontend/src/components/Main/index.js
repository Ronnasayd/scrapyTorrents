/* eslint-disable no-multi-spaces */
/* eslint-disable no-underscore-dangle */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import {
  FlatList,
  ItemImage,
  ItemContainer,
  ItemTituloContainer,
  ItemIMDB,
  ItemTituloText,
  ItemAno,
} from './styles';

import api from '../../services/api';
import defaultImage from '../../assets/default.jpg';

export default function Main() {
  const [listOfMovies, setListOfMovies] = useState([]);
  const [page, setPage] = useState(1);

  window.onscroll = function scrollWindow() {
    const { documentElement } = document;
    const { body } = document;
    const percent =      ((documentElement.scrollTop || body.scrollTop)
        / ((documentElement.scrollHeight || body.scrollHeight)
          - documentElement.clientHeight))
      * 100;
    if (percent >= 80) {
      setPage(page + 1);
    }
  };

  function handleSetDefaultImage(e) {
    e.target.src = defaultImage;
  }

  useEffect(() => {
    async function getData() {
      const {
        data: { docs },
      } = await api.get(`/filmes/${page}`);
      setListOfMovies([...listOfMovies, ...docs]);
    }
    getData();
    // eslint-disable-next-line
  }, [page]);

  return (
    <FlatList>
      {listOfMovies.map((item) => (
        <ItemContainer key={item._id}>
          <Link to={`/show/${item._id}`}>
            <ItemImage src={item.image_url} onError={handleSetDefaultImage} />
            <ItemTituloContainer className="titulo">
              <ItemTituloText>
                {item.titulo.length > 32
                  ? `${item.titulo.substring(0, 32)} ...`
                  : item.titulo}
              </ItemTituloText>
            </ItemTituloContainer>
            <ItemIMDB>{parseFloat(item.imdb).toFixed(1)}</ItemIMDB>
            <ItemAno>{item.ano_lancamento}</ItemAno>
          </Link>
        </ItemContainer>
      ))}
    </FlatList>
  );
}
