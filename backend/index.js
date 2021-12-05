const serverless = require('serverless-http');
const express = require('express')
const app = express()

const yearlyThreshold = 27295;
const monthlyThreshold = 2274;
const interest = 0.09;

const calculateDueSum = (salary) => {
  const currentSalary = parseInt(salary);
  const monthlySalary = currentSalary/12;
 //const actualIncome = currentSalary-tax(currentSalary);
  let aboveMonthlyThreshold = monthlySalary-monthlyThreshold;
  let monthlyInterest = aboveMonthlyThreshold*interest;
  const yearlyInterest = monthlyInterest*12;
  const dueSum = yearlyInterest*30

  return {dueSum, aboveMonthlyThreshold};
} 


const tax = (currentSalary) => { 
  const personalAllowance = 12570;
  let x = currentSalary - personalAllowance;
    if (x > 0 && x <= 37700 ){
      x = x*0.2;
    } else if (x>37700){
      x = (37700*0.2) + ((x-37700)*0.4)
    } else {
      x = 0
    }
    return x;
};

app.get('/calculate', function (req, res) {
  console.log('foo')
  try {
    const {dueSum, aboveMonthlyThreshold}  = calculateDueSum(req.query.num1);
    const calculatedTax = tax(req.query.num1);
    res.json({dueSum: dueSum, tax: calculatedTax, aboveMonthlyThreshold})
  } catch (err) {
    console.error(err)
    res.status(500)
  }
})



// app.get('/:num1/:num2', function (req, res) {
//   const num1 = parseInt(req.params.num1)
//   const num2 = parseInt(req.params.num2)
//   const total = num1 + num2
//   res.send({total: total})
// })
// dev/?num1=51&num2=69
// dev/51/69

module.exports = {handler : serverless(app), tax: tax, calculateDueSum: calculateDueSum};

// module.exports = { name: "akshar"}
// module.exports.name = "akshar"
/***
 * query parameter
 * json body in api
 * search request headers/api headers
 * serverless offline 
 * 
 */

