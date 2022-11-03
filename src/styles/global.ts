import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    :root {
        --background-color: #202329;
        --background-color-card: #C2C3C3;
        --green: #8BCF21;
    }
    textarea, input { outline: none; }
    * {
        margin: 0;
        padding: 0;
        box-sizing:border-box;
    }

    html {
        @media (max-width: 1080px){
            font-size: 93.75%; //15px
        }

        @media (max-width: 720px){
            font-size: 87.5%; //14px
        }
    }

    body, input, text-area, button {
        font-family: 'Roboto', sans-serif;
    }

    body {
        background-color: var(--background-color);
        -webkit-font-smothing: antialiased;
        padding: 1rem 2rem;

    }
    
    button {
        cursor: pointer;
    }

    [disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }
    
`;
