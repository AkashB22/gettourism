let nodemailer = require('nodemailer');
let lib = {};

lib.sendMail = function(mailDetails, cb){
    let transport = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.MAIL_ID,
        pass: process.env.PASS
    }
});

const mailOption = {
                from: 'GETZTOURISM <getztourism@gmail.com>',
                to: mailDetails.email+ ', akashnodemail@gmail.com',
                subject: "Enquiry Form",
                html: "<h1>Enquiry Form</h1><div><h3>Enquiry Form has been submitted by " + mailDetails.email + "</h3></div><div><label for='from'>From: </label>" + mailDetails.from + "</div><div><label for=to'>To: </label>"+ mailDetails.to+"</div><div><label for='members'>Select Number Of Adults: </label>"+ mailDetails.members +"members</div><div><label for='onwardsDate'>Visiting Date: </label>" + mailDetails.onwardsDate+"</div><div><label for='hotelCategory'>Hotel Category: </label>"+mailDetails.hotelCategory+"</div><div><label for='mealPlan'>Meal Plan: </label>"+mailDetails.mealPlan+"</div><div><label for='otherComments'>Other Comments: </label>"+mailDetails.otherComments+"</div>"
        };
transport.sendMail(mailOption, (err, response)=>{
    if(err) cb(err, response);
    else cb(err, response);
});
}

module.exports = lib;

