const handlebars = require('handlebars');
const nodemailer = require("nodemailer");
const { promisify } = require('util');
const fs = require('fs');

const readFile = promisify(fs.readFile);


const sendEmail = async (options) => {

    let html = await readFile(options.templatePath, 'utf8');
    let template = handlebars.compile(html);
  
    let htmlToSend = template(options.data);

    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'nthabisengmohale2@gmail.com',
            pass: 'jcejvcgyohptatzo'
        }
    });

    let mailOptions = {
        from: 'nthabisengmohale2@gmail.com',
        to: options.to,
        subject: options.subject,
        html : htmlToSend
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);

        } else {
            console.log('Email sent: ' + info.response);
        }
    });
}

module.exports = sendEmail;