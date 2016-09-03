const express = require('express')
, request = require('request')
, app = express()
, bodyParser = require('body-parser')
, morgan = require('morgan')
, port = process.env.PORT || 8080

app.use(morgan('dev'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

require('dotenv').config()

app.get('/', (req, res) => {
  var options = { method: 'GET',
  url: 'https://api.linkedin.com/v1/people/~:(id,first-name,last-name,positions)',
  qs: { format: 'json' },
  headers:
   { 'cache-control': 'no-cache',
     authorization: 'Bearer ' + process.env.ACCESS_TOKEN } };

  request(options, function (error, response, body) {
    if (error) throw new Error(error)
    res.json(body)
  })

})

app.listen(port, () => {
  console.log('app listening on', port)
})