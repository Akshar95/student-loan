const serverless = require("serverless-http");
const express = require("express");
const app = express();

const yearlyThreshold = 27295;
const monthlyThreshold = 2274;
const interest = 0.09;
const graduationYear = 2017;
const currentYear = 2021;

const calculateDebt = (salary) => {
  const currentSalary = parseInt(salary);
  const monthlySalary = currentSalary / 12;
  const aboveMonthlyThreshold = monthlySalary - monthlyThreshold;
  const monthlyInterest = aboveMonthlyThreshold * interest;
  const yearlyInterest = monthlyInterest * 12;
  const dailyPayment = monthlyInterest / 30;
  const hourlyPayment = dailyPayment / 24;
  const minutePayment = hourlyPayment / 60;
  const secondlyPayment = minutePayment / 60;
  const dueSum = Math.round(yearlyInterest * 30);

  return {
    dueSum,
    aboveMonthlyThreshold,
    monthlyInterest,
    yearlyInterest,
    dailyPayment,
    hourlyPayment,
    minutePayment,
    secondlyPayment,
  };
};

const calculateYearsLeft = () => {
  yearsSinceGraduation = currentYear - graduationYear;
  yearsLeft = 30 - yearsSinceGraduation;

  return yearsLeft;
};

const calculateFinalYear = () => {
  finalYearOfPayment = yearsLeft + currentYear;

  return finalYearOfPayment;
};

const calculations = (req, res) => {
  try {
    const {
      dueSum,
      aboveMonthlyThreshold,
      monthlyInterest,
      yearlyInterest,
      dailyPayment,
      hourlyPayment,
      minutePayment,
      secondlyPayment,
    } = calculateDebt(req.query.num1);
    const yearsLeft = calculateYearsLeft(req.query.num2);
    const finalYearOfPayment = calculateFinalYear(req.query.num2);

    res.json({
      dueSum: dueSum,
      aboveMonthlyThreshold: aboveMonthlyThreshold,
      monthlyInterest: monthlyInterest,
      yearlyInterest: yearlyInterest,
      dailyPayment: dailyPayment,
      hourlyPayment: hourlyPayment,
      minutePayment: minutePayment,
      secondlyPayment: secondlyPayment,
      yearsLeft: yearsLeft,
      finalYearOfPayment: finalYearOfPayment,
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
  calculateYearsLeft: calculateYearsLeft,
  calculateFinalYear: calculateFinalYear,
};


