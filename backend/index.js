const serverless = require('serverless-http');
const express = require('express')
const app = express()

app.get('/calculate', function (req, res) {
  console.log('foo')
  try {
    const currentSalary = parseInt(req.query.num1);
    const monthlyThreshold = 2000;
    const monthlySalary = currentSalary/12;
    const aboveThreshold = monthlySalary-monthlyThreshold;
    const interest = 0.09;
    const monthlyInterest = aboveThreshold*interest;
    const yearlyInterest = monthlyInterest*12;
    const dueSum = yearlyInterest*30

    res.send({dueSum: dueSum})
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

module.exports.handler = serverless(app);



/***
 * query parameter
 * json body in api
 * search request headers/api headers
 * serverless offline 
 * 
 */
