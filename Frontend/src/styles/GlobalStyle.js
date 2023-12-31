import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box; 
    list-style: none;
}
html{
    overflow-y:auto
}
:root{
    --app-bg-color: #e0dae1;
    --primary-color: #222260;
    --primary-color2: 'color: rgba(34, 34, 96, .6)';
    --primary-color3: 'color: rgba(34, 34, 96, .4)';
    --color-green: #42AD00;
    --color-grey: #aaa;
    --color-accent: #F56692;
    --color-delete: #FF0000;
    --dark-font-color: #222260
}

body{
    font-family: 'Lobster', cursive;
    font-family: 'Nunito', sans-serif;
    font-size: clamp(1rem, 1.5vw, 1.2rem); /*clamp: specifies min, preferred and max font sizes that grows and shrink window size */
    overflow-x: hidden;
    color: rgba(34, 34, 96, .6);
}
`;