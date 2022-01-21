const nodemailer = require('nodemailer')
require('dotenv').config()

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
        user: process.env.CLIENT_EMAIL,
        pass: process.env.CLIENT_PASSWORD,
    },
    logger: true
});

function bookTable(email, name, people, date, time) {
    transporter.sendMail({
        from: '"Peter Parker" <spidermanycutie123@gmail.com>',
        to: `${email}`,
        subject: "Hungry People - Table Reservation",
        text: `Hello,\n 
            thanks for booking a table!\n \n
            Here are your reservation details: \n
            Name: ${name}\n,
            No. of people: ${people}\n
            Date: ${date}\n
            Time: ${time}\n \n
            See you soon, ${name}!`,
        html: `<h1>Hello,</h1><br> 
            <p>thanks for booking a table!</p><br>
            <p>Here are your reservation details:</p><br>
            <ul>
                <li>Name: ${name}</li>
                <li>No. of people: ${people}</li>
                <li>Date: ${date}</li>
                <li>Time: ${time}</li>
            </ul><br>
            <h2>See you soon, ${name}!</h2>`,
    });
}

function contact(name, email, message) {
    transporter.sendMail({
        from: '"Peter Parker" <spidermanycutie123@gmail.com>',
        to: `${email}`,
        subject: "Hungry People - Contact",
        text: `Hello,\n 
            thanks for sending us a message!
            We will get back to you soon. \n
            Your message: \n 
            ${message}\n
            \n
            \n
            See you soon, ${name}!
            \n\n
            Hungry People`,
        html: `<h1>Hello,</h1>
            <p>thanks for sending us a message!</p><br>
            <p>We will get back to you soon.</p><br>
            <p>Your message: </p><br>
            <h2>${message}</h2><br>
            <br><br>
            <p>See you soon, ${name}!</p>
            <br><br>
            Hungry People`,
    });
}

function sendFeedback(email, name) {
    transporter.sendMail({
        from: '"Peter Parker" <spidermanycutie123@gmail.com>',
        to: `${email}`,
        subject: "Hungry People - Feedback",
        text: `Hello,\n 
            thanks for sending us a feedback!
            \n
            \n
            See you soon, ${name}!
            \n\n
            Hungry People`,
        html: `<h1>Hello,</h1>
            <p>thanks for sending us a feedback!</p><br>
            <br><br>
            <p>See you soon, ${name}!</p>
            <br><br>
            Hungry People`,
    });
}

module.exports = {
    bookTable,
    contact,
    sendFeedback,
}
