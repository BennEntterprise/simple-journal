const express = require('express')
const path = require('path')

const app = express()

app.use(express.static(path.join(__dirname, 'client', 'build')))
app.get('/', (req, res) => {
    res.sendFile(`${__dirname}/client/build/index.html`)
})

app.listen(3000, () => {
    console.log(`Listening on Port 3000`)
})