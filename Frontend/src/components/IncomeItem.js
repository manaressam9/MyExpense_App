import React from 'react'
import Button from './Button'
import styled from 'styled-components'
import { useGlobalContext } from '../context/globalContext'
export default function IncomeItem({ id,title,description,amount,date,type,category,indicatorColor, deleteItem}) {
  const {deleteIncome} = useGlobalContext();
   const categoryIcon = () =>{
    switch(category){
        case 'freelancing':
            return <i className='bi bi-globe' />
        case 'salary':
                return <i className='bi bi-wallet-fill' />
        case 'investments':
            return <i className='bi bi-cash-coin' />
        case 'others':
            return <i className='bi bi-piggy-bank-fill' />
    }
   }
   
   const ExpCategoryIcon = () =>{ //change it based on expense cats
    switch(category){
        case 'freelancing':
            return <i className='bi bi-globe' />
        case 'salary':
                return <i className='bi bi-wallet-fill' />
        case 'investments':
            return <i className='bi bi-cash-coin' />
        case 'others':
            return <i className='bi bi-piggy-bank-fill' />
    }
   }
    return (
    <IncomeItemStyle indicator={indicatorColor}>
        <div className='icon'>
             {type === 'Income'? categoryIcon():ExpCategoryIcon()}
        </div>
        <div className='content'>
            <h5>{title}</h5>
            <div className='inner-content'>
                <div className='text'>
                    <p>{amount}</p>
                    <p>{date}</p>
                    <p>{description}</p>
                </div>
                <div className='btn-con'>
                    <Button 
                        icon={<i className='bi bi-trash-fill'></i>}
                            bPad={'1rem'}
                            bRad={'50%'}
                            bg={'var(--primary-color'}
                            color={'#fff'}
                            iColor={'#fff'}
                            hColor={'var(--color-green)'}
                            onClick={() => deleteItem(id)} />
                </div>
            </div>
        </div>
    </IncomeItemStyle>
  )
}
const IncomeItemStyle = styled.div`
background: #FCF6F9;
    border: 2px solid #FFFFFF;
    box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
    border-radius: 20px;
    padding: 1rem;
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    gap: 1rem;
    width: 100%;
    color: #222260;
    .icon{
        width: 80px;
        height: 80px;
        border-radius: 20px;
        background: #F5F5F5;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 2px solid #FFFFFF;
        i{
            font-size: 2.6rem;
        }
    }

    .content{
        flex: 1;
        display: flex;
        flex-direction: column;
        gap: .2rem;
        h5{
            font-size: 1.3rem;
            padding-left: 2rem;
            position: relative;
            &::before{
                content: '';
                position: absolute;
                left: 0;
                top: 50%;
                transform: translateY(-50%);
                width: .8rem;
                height: .8rem;
                border-radius: 50%;
                background: ${props => props.indicator};
            }
        }

        .inner-content{
            display: flex;
            justify-content: space-between;
            align-items: center;
            .text{
                display: flex;
                align-items: center;
                gap: 1.5rem;
                p{
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    color: var(--primary-color);
                    opacity: 0.8;
                }
            }
        }
    }
`