import React from "react";
import { useState } from "react";
import styles from "./Calculate.module.css";

export const Form = () => {
  const [dueSum, setDueSum] = useState(0);
  //const [aboveMonthlyThreshold, setaboveMonthlyThreshold] = useState(0);
  // const [debtCompound, setdebtCompound] = useState(0)
  const calculateSum = async (event) => {
    event.preventDefault();

    const res = await fetch(
      `http://localhost:3000/calculate/?num1=${event.target.currentSalary.value}`
    );
    //&num2=${event.target.currentDebt.value} if want to add more

    const result = await res.json();
    console.log(result);
    setDueSum(result.dueSum);
    //setaboveMonthlyThreshold(result.aboveMonthlyThreshold);
    // setdebtCompound(result.debtCompound);
  };

  return (
    <>
      <form onSubmit={calculateSum}>
        <ul className={styles.list}>
          <li>
            <label htmlFor="currentSalary">Current Salary: </label>
            <input
              type="text"
              placeholder="30000"
              name="currentSalary"
              id="currentSalary"
            />{" "}
          </li>

          {/* <li>
            <label htmlFor="currentDebt">Current Debt: </label>
            <input
              type="text"
              placeholder="50000"
              name="currentDebt"
              id="currentDebt"
            />{" "}
          </li> */}

          <button className={styles.button} type="submit">
            Calculate
          </button>
        </ul>
      </form>

      <h1>Total Debt: {dueSum}</h1>
      {/* <h1>Above monthly Threshold {aboveMonthlyThreshold}</h1> */}
      {/* <h1>Debt Amount{debtCompound}</h1> */}
    </>
  );
};
