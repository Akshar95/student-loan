import React from "react";

function IndividualGrid({
  secondlyPayment,
  minutePayment,
  hourlyPayment,
  dailyPayment,
  monthlyInterest,
  yearlyInterest,
}) {
  return (
    <div>
      <>
        <div className="container">
          <div className="grid-1">
            <h3>Per Second</h3>
            <p>£{Math.round(secondlyPayment)}</p>
          </div>
          <div className="grid-2">
            <h3>Per Minute</h3>
            <p>£{minutePayment}</p>
          </div>
          <div className="grid-3">
            <h3>Per Hour</h3>
            <p>£{hourlyPayment}</p>
          </div>
          <div className="grid-4">
            <h3>Per Day</h3>
            <p>£{dailyPayment}</p>
          </div>
          <div className="grid-5">
            <h3>Per Month</h3>
            <p>£{monthlyInterest}</p>
          </div>
          <div className="grid-6">
            <h3>Per Year</h3>
            <p>£{yearlyInterest}</p>
          </div>
        </div>

        <style jsx>{`
          .container {
            display: grid;
            margin: 10px 50px 0;
            grid-template-columns: repeat(2, 1fr);
            justify-content: center;
            color: white;
          }
          .grid-1 {
            background-color: #04225b;
            text-align: center;
          }
          .grid-2 {
            background-color: #0c2c69;
            text-align: center;
          }
          .grid-3 {
            background-color: #1a3e7d;
            text-align: center;
          }
          .grid-4 {
            background-color: #264d91;
            text-align: center;
          }
          .grid-5 {
            background-color: #335da6;
            text-align: center;
          }
          .grid-6 {
            background-color: #426fbd;
            text-align: center;
          }

          @media (min-width: 900px) {
            .container {
              display: grid;
              grid-template-columns: repeat(3, 1fr);
              justify-content: center;
              
            }
          }
        `}</style>
      </>
    </div>
  );
}

export default IndividualGrid;
