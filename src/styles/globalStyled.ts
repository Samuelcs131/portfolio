import { createGlobalStyle } from 'styled-components'
import { GlobalStyle } from '../types/styles'

export default createGlobalStyle<GlobalStyle>`
 

    *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        background: none;
        border: none;
        text-decoration: none;
        list-style: none;
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        font-family: 'Poppins', sans-serif;
    }

    html {
        scroll-behavior: smooth;
        overflow-x: hidden;
        background-color: ${({theme})=>theme.background.primary};
        scroll-padding-top: 8.9vh;
    }

    ::-webkit-scrollbar{
        width: 6px;
    }
    ::-webkit-scrollbar-track{
        background-color: ${({theme})=>theme.background.primary};
    }

    ::-webkit-scrollbar-thumb{
        background-color: rgba(212, 212, 212, 0.582);
        border-radius: 5px;
    }
`