const serverless = require("serverless-http");
const express = require("express");
const app = express();

const yearlyThreshold = 27295;
const monthlyThreshold = 2274;
const interest = 0.09;

const calculateDebt = (salary) => {
  const currentSalary = parseInt(salary);
  const monthlySalary = currentSalary / 12;
  const aboveMonthlyThreshold = monthlySalary - monthlyThreshold;
  const monthlyInterest = aboveMonthlyThreshold * interest;
  const yearlyInterest = monthlyInterest * 12; //update this in next version
  const dueSum = Math.round(yearlyInterest * 30);

  return { dueSum, aboveMonthlyThreshold };
};

// adding this function to calculate compounded interest on debt
// const debtCompound = (currentDebt) => {
//   const debtIn30Years = currentDebt * 30;

//   return debtIn30Years;
// };

// const tax = (currentSalary) => {
//   const personalAllowance = 12570;
//   const taxableIncome = currentSalary - personalAllowance;
//   if (taxableIncome > 0 && taxableIncome <= 37700) {
//     return taxableIncome * 0.2;
//   } else if (taxableIncome > 37700) {
//     return 37700 * 0.2 + (taxableIncome - 37700) * 0.4;
//   }
//   return 0;
// };

const calculations = (req, res) => {
  try {
    const { dueSum, aboveMonthlyThreshold } = calculateDebt(req.query.num1);
    // const calculatedTax = tax(req.query.num1);
    // const debtIn30Years = debtCompound(req.query.num2);
    res.json({
      dueSum: dueSum,
      aboveMonthlyThreshold: aboveMonthlyThreshold,
    });
  } catch (err) {
    console.error(err);
    res.status(500);
  }
};

app.get("/calculate", calculations);

module.exports = {
  handler: serverless(app),
  calculateDebt: calculateDebt,
};

/***
 * query parameter
 * json body in api
 * search request headers/api headers
 * serverless offline
 *
 */
