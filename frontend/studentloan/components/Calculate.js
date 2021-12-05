import React from 'react'
import {useState} from 'react'
import styles from './Calculate.module.css'

export const Form = () => {
    const [years, setYears]= useState(0)
    const [tax, setTax]= useState(0)
   // const [monthlyInterest, setMonthlyInterest] = useState(0)
    const calculateSum = async event => {
        event.preventDefault()
        
        const res = await fetch(
            `http://localhost:3000/calculate/?num1=${event.target.currentSalary.value}`) //&num2=${event.target.Debt.value}
        
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

                <button className={styles.button}type='submit'>Calculate</button> 

            </ul>
        </form>
            
        <h2>Amount due over next 30 years:</h2>
        <h1> {years} </h1>
        <h1> {tax} </h1>
        <h1> Monthly Interest </h1>
        </>
    )
}



 