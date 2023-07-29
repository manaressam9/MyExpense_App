import React from "react";
import styled from "styled-components";
import bg from "./img/bg.jpg"
import { MainLayout } from "./styles/Layout";
import Orb from "./styles/Orb";
import Navbar from "./components/Navbar";

const App = () =>{
    return (
        <AppStyled className="App" bg={bg}>
            <Orb />
            <MainLayout>
           <Navbar />
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