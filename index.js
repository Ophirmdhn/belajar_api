const express = require('express') // mengambil modul dengan nama express
const app = express() // main function
const port = 3000

// route atau endpoint utama
app.get('/', (req, res) => {
  res.send('Hello World!')
})

// req = request
// res = response

// membuat route lain
app.get('/profile', (req, res) => {
    res.send("Profile hehe")
})

// untuk run express (di background)
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})