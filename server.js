const express = require('express')

const app = express()

app.get('/', (req, res) => {
    res.sendFile(`${__dirname}/client/public/index.html`)
})

app.listen(3000, () => {
    console.log(`Listening on Port 3000`)
})