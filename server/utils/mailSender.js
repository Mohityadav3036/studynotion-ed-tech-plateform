// const nodemailer = require("nodemailer")

// const mailSender = async (email, title, body) => {
//   try {
//     let transporter = nodemailer.createTransport({
//       host: process.env.MAIL_HOST,
//       auth: {
//         user: process.env.MAIL_USER,
//         pass: process.env.MAIL_PASS,
//       },
//       secure: false,
//     })

//     let info = await transporter.sendMail({
//       from: `"Studynotion | CodeHelp" <${process.env.MAIL_USER}>`, // sender address
//       to: `${email}`, // list of receivers
//       subject: `${title}`, // Subject line
//       html: `${body}`, // html body
//     })
//     console.log(info.response)
//     return info
//   } catch (error) {
//     console.log(error.message)
//     return error.message
//   }
// }

// module.exports = mailSender

const nodemailer = require("nodemailer");

const mailSender = async (email, title, body) => {
    try{
       
            let transporter = nodemailer.createTransport({
                host:process.env.MAIL_HOST,
                port:465,
                secure:true,
                auth:{
                    user: process.env.MAIL_USER,
                    pass: process.env.MAIL_PASS,
                },
                tls:{
                    rejectUnauthorized:false,
                }
            });
            console.log("mohit1234")

             try{
            let info = await transporter.sendMail({
                from: 'StudyNotion || CodeHelp - by Babbar',
                to:`${email}`,
                subject: `${title}`,
                html: `${body}`,
            })
            console.log(info);
            return info;
        }
        catch(error)
        {
            console.log("mailsender inside error")
        }
    }
    catch(error) {
        console.log("falid to send email....")
        console.log(error.message);
    }
}


module.exports = mailSender;
