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
  const [weeklyPayment, setweeklyPayment] = useState(0);
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
    setweeklyPayment(result.weeklyPayment);
    setmonthlyInterest(result.monthlyInterest);
    setyearlyInterest(result.yearlyInterest);
  };

  return (
    <>
      <form onSubmit={calculateSum}>
        <div className="container">
          <div className="card-title">
            <h3 className="card-title-text">Provide Your Income Details</h3>
          </div>
          <div className="resident">
            <label htmlFor="coutry">
              Where were you resident when you took out the loan:{" "}
            </label>
            <select id="country" name="country">
              <option value="en">England or Wales</option>
              <option value="ni">Northen Ireland</option>
              <option value="sc">Scotland</option>
            </select>
          </div>

          <div className="currentSalary">
            <label htmlFor="currentSalary">Total Current Income: </label>
            <input type="text" name="currentSalary" id="currentSalary" />
          </div>
          <div className="graduationYear">
            <label htmlFor="graduationYear">When did you graduate: </label>
            <input
              type="number"
              placeholder="yyyy"
              name="graduationYear"
              id="graduationYear"
              size="4"
            />
          </div>
          <div className="currentLoanBalance">
            <label htmlFor="currentLoanBalance">
              Outstanding Loan Balance:{" "}
            </label>
            <input
              type="text"
              name="currentLoanBalance"
              id="currentLoanBalance"
            />
          </div>
          <button className="button" type="submit">
            Calculate
          </button>
        </div>
      </form>
      <h1>Total Debt: {dueSum}</h1>
      <h2>You have {yearsLeft} years left on your loan!</h2>
      <h2>The final year of your loan is {finalYearOfPayment}!</h2>
      <IndividualGrid
        secondlyPayment={secondlyPayment}
        minutePayment={minutePayment}
        hourlyPayment={hourlyPayment}
        dailyPayment={dailyPayment}
        weeklyPayment={weeklyPayment}
        monthlyInterest={monthlyInterest}
        yearlyInterest={yearlyInterest}
      />
      x
      <style jsx>{`
        .container {
          width: 95%;
          background-color: white;
          color: #04225b;
          font-size: 14px;
          margin: 0 auto;
          box-shadow: #3b4753 0px 10px 13px -7px;
        }
        .card-title {
          padding: 0px 1.5rem;
          background-color: #ebf2ff;
        }
        .card-title-text {
          min-height: 48px;
          padding: 15px 0px;
          color: rgba(0, 0, 0, 0.85);
          font-weight: 500;
          font-size: 16px;
          background: transparent;
          border-bottom: 1px solid #f0f0f0;
          border-radius: 2px 2px 0 0;
        }
        input[type="text"],
        input[type="number"],
        select {
          width: 100%;
          padding: 12px 20px;
          margin: 8px 1.5px;
          display: inline-block;
          border: 1px solid #ccc;
          border-radius: 4px;
          box-sizing: border-box;
          font-size: 16px;
        }
        .resident {
          margin: 10px;
        }
        input[type="submit"] {
          width: 100%;
          background-color: #04aa6d;
          color: white;
          padding: 14px 20px;
          margin: 8px 0;
          border: none;
          border-radius: 4px;
          cursor: pointer;
        }
        .button {
          background-color: #426fbd;
          border: none;
          color: white;
          margin: 20px auto;
          padding: 8px 50px;
          font-size: large;
          cursor: pointer;
          display: flex;
          justify-content: center;
        }

        #currentSalary:focus {
          background-color: lightblue;
        }
        @media (min-width: 768px) {
          .container {
            display: flex;
            flex-direction: column;
            color: #04225b;
            font-weight: bold;
            text-align: center;
          }
        }
      `}</style>
    </>
  );
};
