const express = require('express')
const dotenv = require('dotenv')
const colors = require('colors')
const morgan = require('morgan')
const passport = require('passport')
const path =require('path')
const connectDB = require('./config/dbconnect');

dotenv.config({ path: './config/config.env' })

const transactions = require('./routes/transactions')
const user=require('./routes/user')

connectDB();

const app = express()

app.use(express.json())


app.use(passport.initialize())
app.use(passport.session())

require('./config/passport')(passport)

if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'))
}

app.use('/api/v1/transactions', transactions)
app.use('/api/v1/users',user)

app.use(express.static(path.join(__dirname,"client/build")))

const PORT = process.env.PORT || 5000
app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on Port ${PORT}`.yellow.bold))