const express = require('express') // mengambil modul dengan nama express
const app = express() // main function
const port = 3000
const bodyParser = require('body-parser')

app.use(bodyParser.json())

// route atau endpoint utama
app.get('/', (req, res) => {
  res.send('Hello World!')
})

// req = request
// res = response

// membuat route lain
app.get('/profile', (req, res) => {
    res.send("Profile ini ges hehe") 
})

app.post('/login', (req, res) => {
    console.log({requestFromOutsitde: req.body})
    res.send('Login Berhasil!') // mengembalikan atau mengirimkan pesan
})

app.put('/username', (req, res) => {
    console.log({updateData: req.body})
    res.send('Update Berhasil')
})

// untuk run express (di background)
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})