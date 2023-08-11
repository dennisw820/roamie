const express = require('express')
const cors = require('cors');
const app = express()
const db = require('./.config/db')
// const router = require('./routers/router')

db.connect()

app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cors())
app.set('view engine', 'ejs')
app.set('views', '../client/views')
app.set('partials', '../client/views/partials')

// app.use(router, '/')

app.get('/', (req, res) => {
    res.render('index.ejs')
})
app.post('/search', (req, res) => {
    const {destination, checkin, checkout, guests} = req.body;
    console.log(destination, checkin, checkout, guests)
    res.render('partials/results.ejs')
})
app.post('/reserve:id', (req, res) => {
    res.render('partials/results.ejs')
})

app.get('/login', (req, res) => {
    res.render('login.ejs')
})
app.post('/login', (req, res) => {
    res.redirect('/')
})

app.get('/signup', (req, res) => {
    res.render('signup.ejs')
})
app.post('/signup', (req, res) => {
    const {name} = req.body;
    res.redirect('/login')
})

app.listen(process.env.PORT || 3000, () => console.log(`Server running on Port ${process.env.PORT}.`))