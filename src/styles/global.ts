import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
    }

    body {
        background: #F2F2F2;
        color: #000000;
        -webkit-font-smoothing: antialised;
        width: 1440px;
        margin: 0 auto;
    }

    body, input, button {
        font-family: 'Montserrat', sans-serif;
        font-size: 16px;
    }

    h1,h2,h3,h4,h5,h6, strong {
        font-weight: bold;
    }

    button {
        cursor: pointer;
    }

    a {
      text-decoration: none;
    }
`