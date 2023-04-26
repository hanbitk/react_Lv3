import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    :root{
        /* Color */
        --color-green: #198754;
        --color-red: #dc3545;
        --color-black: #191919;
        --color-white: #ffffff;
        --color-gray: #666666;
        --color-light-gray: #dddddd;
        --color-light-green: #acdf87;
        --color-light-red: #ff8a8a;

        /* Font size */
        --font-large: 60px;
        --font-medium: 32px;
        --font-regular: 16px;
        --font-small: 14px;
        --font-micro: 12px;

        /* Font weight */
        --weight-bold: 600;
        --weight-regular: 400;
        --weight-light: 300;

        /* Size */
        --size-extra-large: 300px;
        --size-large: 200px;
        --size-medium: 150px;
        --size-small: 100px;
        --size-border-radius: 10px;
    }

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
        font-family: 'Poppins', sans-serif;
        background-color: var(--color-white);
    }

    button{
        background-color: transparent;
        cursor: pointer;
        border: none;
        outline: none;
        padding: 0px;
    }

    input {
        border: none;
        background-image: none;
        background-color: transparent;
        box-shadow: none;
} 
`;

export default GlobalStyle;
