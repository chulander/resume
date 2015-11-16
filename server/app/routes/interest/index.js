var _ = require('lodash');
var router = require('express').Router();
var keys = require('../../../../keys');

module.exports = router;

var nodemailer = require("nodemailer");

var nodemailer = require("nodemailer");

var smtpTransport = nodemailer.createTransport("SMTP", {
    service: "Gmail",
    auth: {
        XOAuth2: {
            user: keys.user,
            // Not @developer.gserviceaccount.com
            clientId: keys.clientId,
            clientSecret: keys.clientSecret,
            refreshToken: keys.refreshToken
        }
    }
});



router.post('/', function(req, res, next) {
    console.log('sending email');

    var mailOptions = {
        from: "shino.sk@gmail.com",
        to: req.body.email,
        subject: req.body.intent,
        generateTextFromHTML: true,
        html: "<p>Thank you for writing with the intent to " + req.body.intent + "</p><p>I've confirmed your message<p>" + req.body.message +"<p>and will contact you shortly.</p>"
    };



    smtpTransport.sendMail(mailOptions, function(error, response) {
        if (error) {
            console.log(error);
            res.status(500).end();
        } else {
            console.log(response);
            smtpTransport.close();
            res.status(201).end();
        }

    });






    //emailer('signup', params);

});
