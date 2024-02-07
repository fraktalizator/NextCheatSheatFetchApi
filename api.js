const express = require('express')
const app = express()
const port = 8080

app.get('/Students', (req, res) => {
  res.send([{name: "Tomek", id:3, login:"TomekLogin"},
  {name: "Tomek1", id:3, login:"siemanko"},
  {name: "Tomek2", id:4, login:"eeeeeee"},
  {name: "Tomek3", id:6, login:"44444"},
  {name: "Tomek4", id:111, login:"asdasd"},
  {name: "Tomek5", id:342, login:"ultralogin2"},
  {name: "Tomek6", id:31111, login:"loginfajnylongin"}])
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})