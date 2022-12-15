import { createGlobalStyle } from "styled-components";
import background from "../assets/background.svg"

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
        background-size: contain;
        background-repeat: no-repeat;
        color: ${props => props.theme["base-text"]};
        -webkit-font-smoothing: antialiased;
        ::-webkit-scrollbar {
        width: 20px;
        }
        ::-webkit-scrollbar-track {
        box-shadow: inset 0 0 5px transparent;
        }
        ::-webkit-scrollbar-thumb {
        background: ${props => props.theme["base-input"]};
        border-radius: 4px;
        }
    }
    body, input, textarea, button {
        font: 400 1rem "Nunito", sans-serif;
    }
    
    @media (max-width: 1120px){
        body {
            padding: 1rem;
        }
    }
`

