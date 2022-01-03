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
          <div className="grid-4">
            <h3>Per Month</h3>
            <p>£{monthlyInterest}</p>
          </div>
          <div className="grid-4">
            <h3>Per Year</h3>
            <p>£{yearlyInterest}</p>
          </div>
        </div>

        <style jsx>{`
          .container {
            display: grid;
            margin: 10px 10px 0;
            grid-gap: 10px;
            grid-template-columns: repeat(auto-fill, 200px);
            justify-content: center;
          }
          .grid-1 {
            border-style: solid;
            border-color: red;
            background-color: white;
            text-align: center;
          }
          .grid-2 {
            border-style: solid;
            border-color: red;
            background-color: white;
            text-align: center;
          }
          .grid-3 {
            border-style: solid;
            border-color: red;
            background-color: white;
            text-align: center;
          }
          .grid-4 {
            border-style: solid;
            border-color: red;
            background-color: white;
            text-align: center;
          }
          .grid-4 {
            border-style: solid;
            border-color: red;
            background-color: white;
            text-align: center;
          }
          .grid-4 {
            border-style: solid;
            border-color: red;
            background-color: white;
            text-align: center;
          }
          .grid-5 {
            border-style: solid;
            border-color: red;
            background-color: white;
            text-align: center;
          }
          .grid-6 {
            border-style: solid;
            border-color: red;
            background-color: white;
            text-align: center;
          }

          @media (min-width: 900px) {
            .container {
              display: grid;
              grid-gap: 10px;
              grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
              justify-content: center;
            }
          }
        `}</style>
      </>
    </div>
  );
}

export default IndividualGrid;
