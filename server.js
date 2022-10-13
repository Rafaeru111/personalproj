if(process.env.NODE_ENV !== 'production')
{
    require('dotenv').config()
}
const express = require('express')
const app = express()
const expresslayouts = require('express-ejs-layouts')

//declare the webroute
const webroute = require('./routes/web')

app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')
app.set('layout', 'layouts/layouts')
app.use(expresslayouts)
app.use(express.static('public'))


        //setting up the database
        const mongoose = require('mongoose')
        mongoose.connect(process.env.DATABASE_URL, {
        useNewUrlParser:true })
        const db = mongoose.connection
        db.on('error', error=> console.error(error))
        db.once('open',() => console.log('Connected to Moongoose'))


// app and use the web route
app.use('/', webroute)


app.listen(process.env.PORT || 8000)

