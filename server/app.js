const express = require('express')
const app = express()
const db = require('./.config/db')
// const router = require('./routers/router')

db.connect()

app.use(express.json())
app.set('view engine', 'ejs')
app.set('views', '../client/views')
// app.use(router, '/')

app.get('/', (req, res) => {
    res.render('index.ejs')
})


app.listen(process.env.PORT || 3000, () => console.log(`Server running on Port ${process.env.PORT}.`))