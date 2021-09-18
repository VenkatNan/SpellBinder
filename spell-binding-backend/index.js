const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors())
const userController = require("./Controllers/Users")
const methodOverride = require('method-override')
require('dotenv').config()
const path = require('path')

app.use(methodOverride('_method'))
app.use(express.json())

app.use(express.urlencoded({ extended: true }))
app.use('/users', userController)
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../build'), (err) => {
        console.log('problem sendFile of react-build')
    })
})

 
app.set("port", process.env.PORT || 4000)
app.listen(app.get('port'), () => {console.log(`Listening on ${app.get('port')}`)})
