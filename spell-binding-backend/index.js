const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
app.use(cors())
const userController = require("./Controllers/Users")
const methodOverride = require('method-override')
require('dotenv').config()

app.use(methodOverride('_method'))
app.use(express.json())

app.use(express.urlencoded({ extended: true }))
app.use('/users', userController)
const secret = process.env.SECRET || "mongodb+srv://VenkatNan:Parvathi22@venkatnan.bied5.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
mongoose
  .connect(secret,{
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("MongoDB has been connected"))
  .catch((err) => console.log(err));
 
app.set("port", process.env.PORT || 4000)
app.listen(app.get('port'), () => {console.log(`Listening on ${app.get('port')}`)})
