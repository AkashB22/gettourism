const nodemailer = require('nodemailer');
let mail = {};

mail.sendEmail = function(mailDetails, callback){

        let transporter = nodemailer.createTransport({
                host: 'smtp.mailtrap.io',
                port: 25,
                auth: {
                    user: 'a161025e431288',
                    pass: '4956bbf59315c3'
                }
        });

        transporter.sendMail({
                from: '"GETZTOURISM" <getztourism-c5f63c@inbox.mailtrap.io>',
                to: "akashbalu22@gmail.com, getztourism@gmail.com",
                subject: "Enquiry Form ",
                test: "Enquiry Form has been submitted by"+mailDetails.email,
                html: "<h1>Enquiry Form</h1><div><label for='from'>From: </label>" + mailDetails.from + "</div><div><label for=to'>To: </label>"+ mailDetails.to+"</div><div><label for='members'>Select Number Of Adults: </label>"+ mailDetails.members +"members</div><div><label for='onwardsDate'>Visiting Date: </label>" + mailDetails.onwardsDate+"</div><div><label for='hotelCategory'>Hotel Category: </label>"+mailDetails.hotelCategory+"</div><div><label for='mealPlan'>Meal Plan: </label>"+mailDetails.mealPlan+"</div><div><label for='otherComments'>Other Comments: </label>"+mailDetails.otherComments+"</div>"
        }, function(err, info){
                if(err){
                        callback(true, err)
                } else{
                        console.log("message sent", info);
                        callback(false, info);
                }
        });
        console.log("mail function called ");        
}

module.exports = mail;

