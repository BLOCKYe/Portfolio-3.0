export default (req: any, res: any) => {
    let nodemailer = require('nodemailer');
    require('dotenv').config();

    const transporter = nodemailer.createTransport({
        host: process.env.HOST,
        port: 465,
        secure: true,
        auth: {
            user: process.env.USER,
            pass: process.env.PASSWORD,
        },
    });

    const mailOptions = {
        from: 'kontakt@dominikobloza.pl',
        to: 'kontakt@dominikobloza.pl',
        subject: req.body.topic,
        text: req.body.message,
    };

    transporter.sendMail(mailOptions, (error: any, info: any) => {
        if (error) {
            console.log(error);
            res.send('error');
        } else {
            console.log('Sent: ' + info.response);
            res.send('success');
        }
    });

    res.status(200);
};