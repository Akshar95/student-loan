const serverless = require('serverless-http');
const express = require('express')
const app = express()

app.get('/', function (req, res) {
  const num1 = parseInt(req.query.num1)
  const num2 = parseInt(req.query.num2)
  const total = num1 + num2

  res.send({total: total})
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
