const nodemailer = require('nodemailer');
let mail = {};

mail.sendEmail = function(mailDetails){

        let transporter = nodemailer.createTransport({
                host: 'smtp.ethereal.email',
                port: 587,
                auth: {
                    user: 'leanne75@ethereal.email',
                    pass: 'eEMATN3a673ekxVZtX'
                }
        });

        let info = transporter.sendMail({
                from: '"GETZTOURISM" <akash@akashbalu.com>',
                to: "akashbalu22@gmail.com, getztoursm@gmail.com",
                subject: "Enquiry Form ",
                test: "Enquiry Form has been submitted by"+mailDetails.email,
                html: "<h1>Enquiry Form</h1><div><label for='from'>From: </label>" + mailDetails.from + "</div><div><label for=to'>To: </label>"+ mailDetails.to+"</div><div><label for='members'>Select Number Of Adults: </label>"+ mailDetails.members +"members</div><div><label for='onwardsDate'>Visiting Date: </label>" + mailDetails.onwardsDate+"</div><div><label for='hotelCategory'>Hotel Category: </label>"+mailDetails.hotelCategory+"</div><div><label for='mealPlan'>Meal Plan: </label>"+mailDetails.mealPlan+"</div><div><label for='otherComments'>Other Comments: </label>"+mailDetails.otherComments+"</div>"
        }, function(err, info){
                if(err){
                        console.log(err)
                } else{
                        console.log("message sent: %s", info.messageId);
                }
        });
        console.log("mail function called ");        
}

module.exports = mail;

