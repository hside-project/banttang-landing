import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *, 
  *::before, 
  *::after {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }
  body {
	line-height: 1em;
  }

  input {
    appearance: none;
    box-sizing: content-box;
    border: 0;
    :focus {
      outline: none;
    }
  }

  textarea {
    :focus {
      outline: none;
    }
  }

  ol, ul {
    list-style: none;
  }

  blockquote, q {
    quotes: none;
  }

  button {
    display: inline-block;
    border: none;
    margin: 0;
    padding: 0;
    text-decoration: none;
    background: none;
  }

  a {
  text-decoration: none;
  a:link { color: Navy; } 
  a:visited { color: DeepSkyBlue; }
  a:hover { color: Navy; } 
  a:active { color: Navy ;}
  }
`;

export default GlobalStyle;
