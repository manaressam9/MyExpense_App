import React, { useState } from 'react';
import styled from 'styled-components';
import avatar  from '../img/avatar.png'
export default function Navbar({active, setActive}) {
    const navItems = [
        {
            id: 1,
            title: 'Dashboard',
            icon: <i className="bi bi-house-door-fill"></i>,
            link:'/dashboard'
        },
        {
            id: 2,
            title: 'Transactions',
            icon: <i className="bi bi-credit-card-fill"></i>,
            link:'/transactions'
        },{
            id: 3,
            title: 'Income',
            icon: <i className="fa-solid fa-money-bill-trend-up" ></i>,
            link: '/income'
        },{
            id: 4,
            title: 'Expenses',
            icon: <i className="fa-solid fa-money-bill-transfer"></i>,
            link:'/expenses'
        }
    ]
  return (
    <NavbarStyle>
        <div className='user-container'>
            <img src={avatar} alt="user photo" width="100px" height="100px"/>
            <div className='user-data'>
                <h2>Name</h2>
                <p>2000 EGP</p>
            </div>
        </div>
        <ul className='nav-items m-0 p-0'>
               {navItems.map(i =>{
                return <li key={i.id} onClick={()=>{setActive(i.id)}} className={active === i.id? `active`:``}>
                    {i.icon}
                    <span>{i.title}</span>
                </li>
               })}
        </ul>
        <div className='sign-out-btn'>
        <i className="bi bi-box-arrow-left"></i> Sign Out
        </div>
    </NavbarStyle>
  )
}
const NavbarStyle = styled.nav`
z-index: 2;
background: var(--app-bg-color);
border-radius:32px ;
border: 3px solid #fff;
padding: 2rem 1.5rem;
width:374px;
height:100%;
backdrop-filter: blur(4.5px);
display:flex;
flex-direction:column;
justify-content: space-between;
gap:2rem;
 .user-container{
    height:100 px;
    display:flex;
    align-items:center;
    gap:1rem;
    img{
        border-radius:50%;
        object-fit:cover;
        background:#fcf6f9;
        border: 2px solid #fff;
        padding: 0.2rem;
        box-shadow: 0px 0px 5px 1px rgba(0,0,0,0.06)
    }
     h2{
         color: var(--dark-font-color);
         font-weight: 600
    }
    p{color: #22226099}
 }
 .nav-items{
    display: flex;
    flex-direction: column;
    flex:1;
    z-index: 3;
    li{
        display: grid;
        grid-template-columns: 40px auto;
        align-items: center;
        margin: 0.6rem 0;
        padding-left: 1rem;
        position: relative;
        font-weight: 500;
        color: #22226099;
        cursor: pointer;
        transition: all .4s ease-in-out;
        i{
            font-size: 1.3rem;
            transition: all .4s ease-in-out;
        }
    }
    .active{
        color: #222260 ;
        &::before{
            content: "";
            position: absolute;
            left: 0;
            top: 0;
            bottom: 0;
            width: 4px;
            border-radius: 0 10px 10px 0;
            background-color: #222260;
        }
    }
 }

`;