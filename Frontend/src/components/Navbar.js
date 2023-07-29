import React from 'react';
import styled from 'styled-components';
import avatar  from '../img/avatar.png'
export default function Navbar() {
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
    const NavbarStyle = styled.nav`
    z-index: 2;
    `;
  return (
    <NavbarStyle>
        <div className='user-container'>
            <img src={avatar} alt="user photo" width="100px" height="100px"/>
            <div className='user-data'>
                <h2>Name</h2>
                <p>2000 EGP</p>
            </div>
        </div>
        <ul className='nav-items'>
               {navItems.map(i =>{
                return <li key={i.id}>
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
