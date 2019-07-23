const express = require('express')
const app = express()

// Adds a 1 sec delay for all requests
app.use((req, res, next) => setTimeout(next, 1000))


app.get('/', function (req, res) {
  let result = []
  Object.keys(process.env).map(key => {
    result.push(`${key}=${process.env[key]}`)
  })
  result.sort()

  res.send(result.join("<br />"))
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
