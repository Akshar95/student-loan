import React from "react";
import { useState } from "react";
import styles from "./Calculate.module.css";

export const Form = () => {
  const [dueSum, setDueSum] = useState(0);
  const [yearsLeft, setyearsLeft] = useState(0);
  const [finalYearOfPayment, setfinalYearOfPayment] = useState(0);

  const calculateSum = async (event) => {
    event.preventDefault();

    const res = await fetch(
      `http://localhost:3000/calculate/?num1=${event.target.currentSalary.value}&num2=${event.target.graduationYear.value}`
    );
    //&num2=${event.target.currentDebt.value} if want to add more

    const result = await res.json();
    console.log(result);
    setDueSum(result.dueSum);
    setyearsLeft(result.yearsLeft);
    setfinalYearOfPayment(result.finalYearOfPayment);
  };

  return (
    <>
      <form onSubmit={calculateSum}>
        <ul className={styles.list}>
          <li>
            <label htmlFor="currentSalary">Current Salary: </label>
            <input type="text" name="currentSalary" id="currentSalary" />
          </li>

          <li>
            <label htmlFor="graduationYear">When did you graduate: </label>
            <input
              type="number"
              placeholder="yyyy"
              name="graduationYear"
              id="graduationYear"
              size="4"
            />
          </li>

          <li>
            <label htmlFor="currentLoanBalance">
              Outstanding Loan Balance:{" "}
            </label>
            <input
              type="text"
              name="currentLoanBalance"
              id="currentLoanBalance"
            />
          </li>

          <button className={styles.button} type="submit">
            Calculate
          </button>
        </ul>
      </form>

      <h1>Total Debt: {dueSum}</h1>
      <h2>You have {yearsLeft} years left on your loan!</h2>
      <h2>The final year of your loan is {finalYearOfPayment}!</h2>
    </>
  );
};
