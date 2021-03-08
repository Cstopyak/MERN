const router = require('express').Router();
const nodemailer = require('nodemailer');

router.get('/', (req, res) => {
    res.send('contacted')
})

router.post('/', (req, res) => {
    //setup for transporting messages or email
    let smtpTransport = nodemailer.createTransport({
        service: 'Gmail',
        //port to connect
        port: 465,
        //authentication
        auth: {
            user: 'colby.stopyak@gmail.com',
            pass: 'googlecolby21'
        }
    })
    let mailOptions = {
        from: data.email,
        to: 'colby.stopyak@gmail.com',
        subject: `Message from ${data.name}`,
        html: ` <h3> Information </h3>
    <ul> 
        <li> Name: ${data.name}</li>
        <li> Name: ${data.email}</li>
    </ul>
    <h3> Message </h3>
    <p>${data.message} </p>
    `
    }


    smtpTransport.sendMail(mailOptions, (err, res) => {
        try {
            if (err) return res.status(400).json({ msg: err })
            else {
                return res.status(200).json({ msg: `message was sent` })
            }
        } catch (err) {
            res.status(500).json({ msg: err })
        }

    })





});







module.exports = router;