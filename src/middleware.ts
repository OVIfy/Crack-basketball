import { defineMiddleware } from "astro:middleware";
import * as nodemailer from 'nodemailer';

var transporter = nodemailer.createTransport({
    service : 'gmail',
    auth : {
        user : 'ifeanyiogbonnah41@gmail.com',
        pass :  import.meta.env.GMAIL_SMTP_PASS
    }
});

//template for mail that will be sent to kamil
var mailOptions = {
    from: 'ifeanyiogbonnah41@gmail.com',
    to: 'kamilzoseni@gmail.com',
    subject: '✨🌟MAIL FROM YOUR PORTFOLIO SITE✨🌟',
    html: ``
};

// `context` and `next` are automatically typed
export const onRequest = defineMiddleware(async ({locals, request, redirect}, next) : Promise<any> => {
    const path = new URL(request.url)
    const method = request.method
    locals.showForm = true

    console.log('here ------------------------------------------------------------++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++')

    if(method == 'POST'){
        const body = await request.formData();
        let senderName = body.get('name')
        let senderEmail = body.get('email')
        let senderMessage = body.get('message')

        mailOptions.html = `
        <p>NAME : ${senderName}</p>
        <p>EMAIL : ${senderEmail}</p>
        <p>MESSAGE: <br/><br /> <span style="background-color: yellow; padding: 10px; border-radius: 10%; border: 1px solid darkorange;">${senderMessage}</span></p>
        `
        try {
            const res = await transporter.sendMail(mailOptions)
            console.log('it got here')
            locals.showForm = false 
        } catch (error) {
            locals.showForm = 'error'
        }

        // return redirect(path.href + '#contact', 303)        
    }

    next()
});