import React,{useMemo, useState} from "react";
import styled from "styled-components";
import bg from "./img/bg.jpg"
import { MainLayout } from "./styles/Layout";
import Orb from "./styles/Orb";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import Transactions from "./components/Transactions";
import Expenses from "./components/Expenses";
import Income from"./components/Income"
const App = () =>{
    const[active, setActive] = useState(1);
    //to avoid restarting the animation when rerendering as a result of changing active state
    // note that if we moved ative state in navbar comp we won't need to use useMemo  
    const orbMemo = useMemo(() => {
       return<Orb />
     },[])
    //display page content  dynamicaly
    const displayData = ()=>{
     switch(active){
        case 1:
            return <Dashboard />
        case 2:
            return <Transactions />
        case 3:
            return <Income />
        case 4:
            return <Expenses />
         default: 
         return<Dashboard />
     }
    }

    return (
        <AppStyled className="App" bg={bg}>
           
         {orbMemo}
            <MainLayout>
           <Navbar active={active} setActive={setActive} />
            <main>{displayData()}</main>
            </MainLayout>
        </AppStyled>
    )
}

const AppStyled = styled.div`
height: 100vh;
background-image: url(${props => props.bg});
position: relative;
main{
    flex:1;
    background: var(--app-bg-color);
    backdrop-filter: blur(4.5px);
border-radius:32px ;
border: 3px solid #fff;
padding: 2rem 1.5rem;
overflow: auto;
overflow-x: hidden;
&::-webkit-scrollbar{
    width: 0;
}
}
`;
export default App