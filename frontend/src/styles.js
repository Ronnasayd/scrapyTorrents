import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

    @import url('https://fonts.googleapis.com/css?family=Roboto:400,500&display=swap');

  *,body,html,#root{
      margin:0;
      padding:0;
      outline:0;
      box-sizing:border-box;
    }
    body,#root{
        height:100%;
    }

  body{
    background:${(props) => props.backgroundColor || '#000'};
    font-family: 'Roboto', sans-serif;
  }
`;
export default GlobalStyle;
