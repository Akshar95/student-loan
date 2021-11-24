import React from 'react'
import {useState} from 'react'

export const Form = () => {
    const [years, setYears]= useState(0)
    const calculateSum = async event => {
        console.log(event)
        event.preventDefault()

        const res = await fetch(
            `http://localhost:3000/calculate/?num1=${event.target.currentSalary.value}&num2=${event.target.Debt.value}`)
        
            const result = await res.json();
            setYears(result.dueSum)
    }
   

    return (
    <>
        <form onSubmit={calculateSum}>
            <label htmlFor="currentSalary">Current Salary: </label>
            <input type="text" placeholder="30000" name="currentSalary" id="currentSalary"
                size="20" /> 
            <button type='submit'>Calculate</button>
            <label htmlFor="Debt">Debt </label>
            <input type="text" placeholder="30000" name="Debt" id="Debt"
                size="20" /> 
            <button type='submit'>Calculate</button>
        </form>
            
        <h1>{years}</h1>
        </>
    )
}



 