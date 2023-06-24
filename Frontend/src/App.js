import React from "react";
import styled from "styled-components";
import bg from "./img/bg.jpg"
import { MainLayout } from "./styles/Layout";
import Orb from "./styles/Orb";

const App = () =>{
    return (
        <AppStyled className="App" bg={bg}>
            <Orb />
            <MainLayout>
           <h2>Hi</h2>
            </MainLayout>
        </AppStyled>
    )
}

const AppStyled = styled.div`
height: 100vh;
background-image: url(${props => props.bg});
position: relative
`;
export default App