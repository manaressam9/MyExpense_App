import React from 'react'
import styled from 'styled-components'
import { InnerLayout } from '../styles/Layout'

export default function Income() {
  return (
    <IncomeStyle>
<InnerLayout>
  <h1>Incomes</h1>
  <div className='income-content'>
    <div className='form-container'></div>
    <div className='incomes'></div>
  </div>
</InnerLayout>
    </IncomeStyle>
  )
}
const IncomeStyle = styled.div``