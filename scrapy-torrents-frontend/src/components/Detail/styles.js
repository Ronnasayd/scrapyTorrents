import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  max-width: 100vw;
`;

export const FilmCard = styled.div`
  margin-top: 90px;
  display: flex;
  flex-direction: row;
  align-items: center;
  color: #fff;
  line-height: 24px;
  @media only screen and (max-width: 600px) {
    flex-direction: column;
    margin-top: 200px;
    align-items: center;
    justify-content: center;
  }
`;

export const FilmDetails = styled.div`
  display: flex;
  flex-basis: 60%;
  padding: 20px;
  align-items: center;
  border: 3px solid #5a4799;
  border-radius: 4px;
  margin-right: 30px;
  @media only screen and (max-width: 600px) {
    flex-direction: column;
    margin-right: 0px;
    border: 0;
  }
`;
export const FilmDetailsContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 20px;
`;

export const FilmPoster = styled.img`
  width: 300px;
  height: 400px;
`;

export const FilmTitulo = styled.h1`
  background: #5a4799;
  padding: 15px;
  margin-bottom: 10px;
  text-align: center;
`;

export const FilmTrailer = styled.iframe`
  width: 500px;
  height: 300px;
  border: 0;
  @media only screen and (max-width: 600px) {
    width: 400px;
  }
`;

export const FilmDetailItem = styled.p`
  & b {
    margin-right: 5px;
  }
`;
export const FilmDetailItemElement = styled.span`
  padding: 1px 5px;
  margin: 0 3px;
  background: #5a4799;
  border-radius: 4px;
`;

export const MagnetHeader = styled.div`
  background: #5a4799;
  color: #fff;
  font-size: 32px;
  padding: 20px;
  margin-top: 60px;
  width: 800px;
  text-align: center;
  @media only screen and (max-width: 600px) {
    width: 400px;
  }
`;
export const MagnetBody = styled.div`
  background: #fff;
  width: 800px;
  margin-bottom: 50px;
  @media only screen and (max-width: 600px) {
    width: 400px;
  }
`;
export const MagnetCard = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  padding: 25px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  @media only screen and (max-width: 600px) {
    justify-content: center;
  }
`;
export const MagnetTitle = styled.div`
  line-height: 24px;
  font-size: 16px;
  color: #555;
`;
export const MagnetButton = styled.a`
  text-decoration: none;
  background: #5a4799;
  color: #fff;
  padding: 15px;
  border-radius: 4px;
  font-weight: 500;
`;
