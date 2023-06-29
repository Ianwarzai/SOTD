const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.post('/contact', async (req, res) => {
    const {name, email, message} = req.body;

    const transporter = nodemailer.createTransport({
        service: 'gmail', // replace with your email provider
        auth: {
            user: 'yourEmail@gmail.com', // replace with your email
            pass: 'yourPassword' // replace with your password
        }
    });

    const mailOptions = {
        from: email,
        to: 'stockofthedaySOTD@gmail.com',
        subject: `New message from ${name}`,
        text: message
    };

    try {
        await transporter.sendMail(mailOptions);
        res.status(200).send('Email sent successfully');
    } catch (error) {
        console.error('Error sending email: ', error);
        res.status(500).send('Error sending email');
    }
});

app.listen(5000, () => console.log('Server is running on port 5000'));
