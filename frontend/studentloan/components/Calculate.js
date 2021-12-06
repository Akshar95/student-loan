import React from 'react'
import {useState} from 'react'
import styles from './Calculate.module.css'

export const Form = () => {
    const [years, setYears]= useState(0)
    const [dueSum, setDueSum]= useState(0)
   // const [monthlyInterest, setMonthlyInterest] = useState(0)
    const calculateSum = async event => {
        event.preventDefault()
        
        const res = await fetch(
            `http://localhost:3000/calculate/?num1=${event.target.currentSalary.value}&num2=${event.target.currentDebt.value}`)
        
            const result = await res.json();
            //setMonthlyInterest(result.monthlyInterest); 
            setYears(result.dueSum);  
            setTax(result.tax);  
             
    }

    return (
    <>
        <form onSubmit={calculateSum}>
            <ul className={styles.list}>
                <li><label htmlFor="currentSalary">Current Salary: </label>
                <input type="text" placeholder="30000" name="currentSalary" id="currentSalary" /> </li>
                
                <li><label htmlFor="currentDebt">Current Debt: </label>
                <input type="text" placeholder="50000" name="currentDebt" id="currentDebt" /> </li>

                <button className={styles.button}type='submit'>Calculate</button> 

            </ul>
        </form>
            
        <h1>Amount due over next 30 years: {years}</h1>
        <h1> Tax: {tax} </h1>
        <h1> Monthly Interest </h1>
        </>
    )
}



 