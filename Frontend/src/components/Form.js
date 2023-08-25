import React, { useState } from 'react'
import styled from 'styled-components'
import DatePicker  from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
import { useGlobalContext } from '../context/globalContext'
import Button from './Button';

export default function Form() {
    const {addIncome,getIncomes} = useGlobalContext();
    //this obj instead of creating multi states for each input
    const [inputState, setInputState] = useState({
        title:'',
        amount:'',
        date:'',
        category:'',
        description:'',
    })
    //destructure inputstate, instead of access it inputState.title >> title
    const {title, amount, date, category,description} = inputState;
    //handle input field value
    const handleInput = name => e =>{
        setInputState({...inputState, [name]: e.target.value})
    }

    const handleSubmit = e =>{
        e.preventDefault() //prevents refresh
        addIncome(inputState)
        getIncomes()
    }
  return (
    <FormStyle onSubmit={handleSubmit}>
        <div className='input-control'>
           <input type='text' value={title} name='title' placeholder='Income Title' onChange={e => setInputState({...inputState,title: e.target.value })} />
        </div>
      <div className='input-control'>
        <input type='text' value={amount} name='amount' placeholder='Income Amount' onChange={handleInput('amount')} />
      </div>
      
        <div className='input-control'>
           <DatePicker id='date' type='text' placeholderText='Date' selected={date} dateFormat="dd/MM/yyyy" onChange={date => {setInputState({...inputState, date:date})}} />
        </div>
        <div className='selects input-control'>
            <select required value={category} name='category' id='category' onChange={handleInput('category')}>
                <option value='' disabled>Select Category</option>
                <option value='salary' >Salary</option>
                <option value='freelancing' >Freelancing</option>
                <option value='investments'>Investments</option>
                <option value='others'>Others</option>
            </select>
        </div>
        <div className='input-control'>
           <textarea cols="30" rows="4" id='description' value={description} name='description' placeholder='Description' onChange={handleInput('description')} />
        </div>
        <div className='submit-btn'>
            <Button name={'Add Income'} icon={<i className="bi bi-plus-circle"></i>}  bPad={'.8rem 1.6rem'}
                    bRad={'30px'}
                    bg={'var(--color-accent'}
                    color={'#fff'} ></Button>
        </div>
    </FormStyle >
  )
}
const FormStyle = styled.form`
 display: flex;
    flex-direction: column;
    gap: 2rem;
    input, textarea, select{
        font-family: inherit;
        font-size: inherit;
        outline: none;
        border: none;
        padding: .5rem 1rem;
        border-radius: 5px;
        border: 2px solid #fff;
        background: transparent;
        resize: none;
        box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
        color: rgba(34, 34, 96, 0.9);
        &::placeholder{
            color: rgba(34, 34, 96, 0.4);
        }
    }
    .input-control{
        input{
            width: 100%;
        }
    }

    .selects{
        display: flex;
        /* justify-content: flex-end; */
        select{
            color: rgba(34, 34, 96, 0.4);
            &:focus, &:active{
                color: rgba(34, 34, 96, 1);
            }
        }
    }

    .submit-btn{
        button{
            box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
            &:hover{
                background: var(--color-green) !important;
            }
        }
    }
`