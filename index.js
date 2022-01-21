const express = require('express')
const multer = require('multer')
const { bookTable, contact, sendFeedback } = require("./mail")

require('dotenv').config()
const app = express()
const upload = multer()

// NODEMAILER

const logger = function (req, _, next) {
    console.log(req.method, req.url)
    next()
}

app.set("view engine", "ejs")
app.use(express.static(__dirname + '/public'))
app.use(express.urlencoded({ extended: true }))
app.use(logger)


app.get("/", (req, res) => {
    res.render("pages/index")
})

// MESSAGES FORMS
app.post('/reservation', upload.none(), function (req, res, next) {
    const reservation = {
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        people: req.body.people,
        date: req.body.date,
        time: req.body.time,
    }
    bookTable(reservation.email, reservation.name, reservation.people, reservation.date, reservation.time,)
    res.redirect("/")
})
app.post("/contact", upload.none(), function (req, res, next) {
    const human = {
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        message: req.body.message,
    }
    contact(human.name, human.email, human.message)
    res.redirect("/")
})
app.post("/feedback", upload.none(), function (req, res, next) {
    const feedback = {
        name: req.body.name,
        email: req.body.email,
        rating: req.body.rating,
        message: req.body.message,
    }
    sendFeedback(feedback.email, feedback.name)
    res.redirect("/")
})
//------------------


const PORT = process.env.PORT || 3000
app.listen(PORT, function () {
    console.log("Listening on port " + PORT);
})