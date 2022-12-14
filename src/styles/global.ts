import { createGlobalStyle } from "styled-components";
import background from "../assets/background.gif"


export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    :focus {
        outline: 0;
    }
    body {
        background-image: url(${background});
        background-color: ${props => props.theme["base-background"]};
        color: ${props => props.theme["base-text"]};
        -webkit-font-smoothing: antialiased;
    }
    body, input, textarea, button {
        font: 400 1rem "Nunito", sans-serif;
    } 
`