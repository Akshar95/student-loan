const serverless = require("serverless-http");
const express = require("express");
const app = express();

const yearlyThreshold = 27295;
const monthlyThreshold = 2274;
const interest = 0.09;

const calculateDueSum = (salary) => {
  const currentSalary = parseInt(salary);
  const monthlySalary = currentSalary / 12;
  const aboveMonthlyThreshold = monthlySalary - monthlyThreshold;
  const monthlyInterest = aboveMonthlyThreshold * interest;
  const yearlyInterest = monthlyInterest * 12;
  const dueSum = Math.round(yearlyInterest * 30);

  return { dueSum, aboveMonthlyThreshold };
};

// adding this function to calculate compounded interest on debt
const debtCompound = (currentDebt) => {
  // const currentDebt = parseInt(req.query.num1);
  const debtIn30Years = currentDebt * 30;

  return debtIn30Years;
};

const tax = (currentSalary) => {
  const personalAllowance = 12570;
  const taxableIncome = currentSalary - personalAllowance;
  if (taxableIncome > 0 && taxableIncome <= 37700) {
    return taxableIncome * 0.2;
  } else if (taxableIncome > 37700) {
    return 37700 * 0.2 + (taxableIncome - 37700) * 0.4;
  }
  return 0;
};

const akshar =  (req, res) => {
  try {
    
    const { dueSum, aboveMonthlyThreshold } = calculateDueSum(req.query.num1);
    const calculatedTax = tax(req.query.num1);
    const debtIn30Years = debtCompound(req.query.num1);
    res.json({
      dueSum: dueSum,
      tax: calculatedTax,
      aboveMonthlyThreshold: aboveMonthlyThreshold,
    });
  } catch (err) {
    console.error(err);
    res.status(500);
  }
}

app.get("/calculate", akshar);

// app.get('/:num1/:num2', function (req, res) {
//   const num1 = parseInt(req.params.num1)
//   const num2 = parseInt(req.params.num2)
//   const total = num1 + num2
//   res.send({total: total})
// })
// dev/?num1=51&num2=69
// dev/51/69

module.exports = {
  handler: serverless(app),
  tax: tax,
  calculateDueSum: calculateDueSum,
  debtCompound: debtCompound,
};

/***
 * query parameter
 * json body in api
 * search request headers/api headers
 * serverless offline
 *
 */
