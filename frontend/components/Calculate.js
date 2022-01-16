import React from "react";
import { useState } from "react";
import IndividualGrid from "./IndividualGrid";

export const Form = () => {
  const [dueSum, setDueSum] = useState(0);
  const [yearsLeft, setyearsLeft] = useState(0);
  const [finalYearOfPayment, setfinalYearOfPayment] = useState(0);
  const [secondlyPayment, setsecondlyPayment] = useState(0);
  const [minutePayment, setminutePayment] = useState(0);
  const [hourlyPayment, sethourlyPayment] = useState(0);
  const [dailyPayment, setdailyPayment] = useState(0);
  const [monthlyInterest, setmonthlyInterest] = useState(0);
  const [yearlyInterest, setyearlyInterest] = useState(0);

  const calculateSum = async (event) => {
    event.preventDefault();

    const res = await fetch(
      `http://localhost:3000/calculate/?num1=${event.target.currentSalary.value}&num2=${event.target.graduationYear.value}`
    );
    //&num2=${event.target.currentDebt.value} if want to add more

    const result = await res.json();
    setDueSum(result.dueSum);
    setyearsLeft(result.yearsLeft);
    setfinalYearOfPayment(result.finalYearOfPayment);
    setsecondlyPayment(result.secondlyPayment);
    setminutePayment(result.minutePayment);
    sethourlyPayment(result.hourlyPayment);
    setdailyPayment(result.dailyPayment);
    setmonthlyInterest(result.monthlyInterest);
    setyearlyInterest(result.yearlyInterest);
  };

  return (
    <>
      <form onSubmit={calculateSum}>
        <div className="inputs">
          <label htmlFor="currentSalary">Current Salary: </label>
          <input type="text" name="currentSalary" id="currentSalary" />
          <label htmlFor="graduationYear">When did you graduate: </label>
          <input
            type="number"
            placeholder="yyyy"
            name="graduationYear"
            id="graduationYear"
            size="4"
          />
          <label htmlFor="currentLoanBalance">Outstanding Loan Balance: </label>
          <input
            type="text"
            name="currentLoanBalance"
            id="currentLoanBalance"
          />
        </div>

        <button className="button" type="submit">
          Calculate
        </button>

        <IndividualGrid
          secondlyPayment={secondlyPayment}
          minutePayment={minutePayment}
          hourlyPayment={hourlyPayment}
          dailyPayment={dailyPayment}
          monthlyInterest={monthlyInterest}
          yearlyInterest={yearlyInterest}
        />
      </form>

      <h1>Total Debt: {dueSum}</h1>
      <h2>You have {yearsLeft} years left on your loan!</h2>
      <h2>The final year of your loan is {finalYearOfPayment}!</h2>

      <style jsx>{`
        .inputs {
          display: inline-grid;
          grid-template-columns: 1fr 1fr;
          color: #04225b;
          font-weight: bold;
          text-align: right;
        
        }
        .button {
          background-color: #426fbd;
          border: none;
          color: white;
          margin: auto;
          padding: 8px 50px;
          font-size: large;
          cursor: pointer;
          display: flex;
          justify-content: center;
        }

        #currentSalary:focus {
          background-color: lightblue;
        }
      `}</style>
    </>
  );
};
