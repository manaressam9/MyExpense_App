import React, { createContext, useContext, useState } from "react";
import axios from 'axios';

const BASE_URL = "http://localhost:5000/api/v1/";
//to access states globally
const GlobalContext = createContext()
//provider that wraps the whole app
export const GlobalProvider = (({children})=>{
    const [incomes, setIncomes] = useState([]);
    const [expenses,setExpenses] = useState([]);
    const [error , setError] = useState(null);
    /*Income */
    const addIncome = async (income) =>{
        const res = await axios.post(`${BASE_URL}add-income`, income)
       console.log(res.data)
    }
    const getIncomes = async() =>{
    const res =  await axios.get(`${BASE_URL}get-incomes`)
      .then(res => setIncomes(res.data))
      .catch(err => setError(err))
     
    }
    const deleteIncome = async(id) =>{
      await axios.delete(`${BASE_URL}delete-income/${id}`)
      .then(res => console.log(res))
      getIncomes()
    }
    /*Expense */
  return(
    <GlobalContext.Provider value={{addIncome, getIncomes,deleteIncome ,incomes}}>
        {children}
    </GlobalContext.Provider>
  )  
})

//this func allows access to Globalcontext anywhere
export const useGlobalContext =() => {
    return useContext(GlobalContext)
}