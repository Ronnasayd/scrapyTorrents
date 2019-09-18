/* eslint-disable no-multi-spaces */
/* eslint-disable no-underscore-dangle */
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";

import {
  FlatList,
  ItemImage,
  ItemContainer,
  ItemTituloContainer,
  ItemIMDB,
  ItemTituloText,
  ItemAno
} from "./styles";

import api from "../../services/api";
import defaultImage from "../../assets/default.jpg";

export default function Main() {
  const [listOfMovies, setListOfMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMorePages, setHasMorePages] = useState(true);

  function handleSetDefaultImage(e) {
    e.target.src = defaultImage;
  }

  async function getData() {
    setPage(page + 1);
    const {
      data: { docs, pages }
    } = await api.get(`/filmes/${page}`);
    setListOfMovies([...listOfMovies, ...docs]);
    if (page >= pages) {
      setHasMorePages(false);
    }
  }
  useEffect(() => {
    getData();
    // eslint-disable-next-line
  }, []);
  return (
    <InfiniteScroll
      dataLength={listOfMovies.length}
      next={getData}
      hasMore={hasMorePages}
    >
      <FlatList>
        {listOfMovies.map(item => (
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
    </InfiniteScroll>
  );
}
