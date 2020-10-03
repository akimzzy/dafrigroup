const nodemailer = require('nodemailer');
const mailGun = require('nodemailer-mailgun-transport');

require('dotenv/config');

const auth = {
    auth: {
        api_key: process.env.KEY,
        domain: process.env.DOMAIN
    }
};

const transporter = nodemailer.createTransport(mailGun(auth));

const sendMail = (name, email, subject, message, cb) => {

    const mailOptions = {
        from: email,
        to: "help@dafrigroup.com",
        subject,
        text: `${name} \n\n ${message}`
    };

    transporter.sendMail(mailOptions, (err, data) => {
        if (err) {
            cb(err, null)
        } else {
            cb(null, data)
        }
    })

};

module.exports = sendMail;