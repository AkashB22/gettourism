const sgMail = require('@sendgrid/mail');
let mail = {};

mail.sendEmail = function(mailDetails, callback){
        sgMail.setApiKey('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');
        const msg = {
                from: '"GETZTOURISM" <getztourism@gmail.com>',
                to: "akashbalu22@gmail.com, getztourism@gmail.com, " + mailDetails.email,
                subject: "Enquiry Form ",
                test: "Enquiry Form has been submitted by" + mailDetails.email,
                html: "<h1>Enquiry Form</h1><div><label for='from'>From: </label>" + mailDetails.from + "</div><div><label for=to'>To: </label>"+ mailDetails.to+"</div><div><label for='members'>Select Number Of Adults: </label>"+ mailDetails.members +"members</div><div><label for='onwardsDate'>Visiting Date: </label>" + mailDetails.onwardsDate+"</div><div><label for='hotelCategory'>Hotel Category: </label>"+mailDetails.hotelCategory+"</div><div><label for='mealPlan'>Meal Plan: </label>"+mailDetails.mealPlan+"</div><div><label for='otherComments'>Other Comments: </label>"+mailDetails.otherComments+"</div>"
        };
        sgMail.send(msg, (err, info)=>{
                callback(err, info);
        });
        console.log("mail function called ");        
}

module.exports = mail;

