let nodemailer = require('nodemailer');
let lib = {};

lib.sendMail = function(to, subject, text, cb){
    let transport = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'akashnodemail@gmail.com',
        pass: 'Rajibalu@123'
    }
});

const mailOption = {
                from: '"GETZTOURISM" <getztourism@gmail.com>',
                to: "akashbalu22@gmail.com, getztourism@gmail.com, " + mailDetails.email,
                subject: "Enquiry Form ",
                test: "Enquiry Form has been submitted by" + mailDetails.email,
                html: "<h1>Enquiry Form</h1><div><label for='from'>From: </label>" + mailDetails.from + "</div><div><label for=to'>To: </label>"+ mailDetails.to+"</div><div><label for='members'>Select Number Of Adults: </label>"+ mailDetails.members +"members</div><div><label for='onwardsDate'>Visiting Date: </label>" + mailDetails.onwardsDate+"</div><div><label for='hotelCategory'>Hotel Category: </label>"+mailDetails.hotelCategory+"</div><div><label for='mealPlan'>Meal Plan: </label>"+mailDetails.mealPlan+"</div><div><label for='otherComments'>Other Comments: </label>"+mailDetails.otherComments+"</div>"
        };
transport.sendMail(mailOption, (err, response)=>{
    if(err) throw err;
    else cb(err, response);
});
}

module.exports = lib;

