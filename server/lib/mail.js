const nodemailer = require('nodemailer');
let mail = {};

mail.sendEmail = async function(mailDetails){

        let transporter = nodemailer.createTransport({
                host: "az1-ss17.a2hosting.com",
                port: "2525",
                secure: false,
                auth: {
                        user: "emailid",
                        pass: "password"
                }
        });

        let info = await transporter.sendMail({
                from: mailDetails.email,
                to: "getztoursm@gmail.com, akashbalu22@gmail.com",
                subject: "Enquiry Form ",
                test: "Enquiry Form has been submitted by"+mailDetails.email,
                html: "<h1>Enquiry Form</h1><div><label for='from'>From: </label>" + mailDetails.from + "</div><div><label for=to'>To: </label>"+ mailDetails.to+"</div><div><label for='members'>Select Number Of Adults</label>"+ mailDetails.members +"members</div><div><label for='onwardsDate'>Visiting Date</label>" + mailDetails.onwardsDate+"</div><div><label for='hotelCategory'>Hotel Category: </label>"+mailDetails.hotelCategory+"</div><div><label for='mealPlan'>Meal Plan:</label>"+mailDetails.mealPlan+"</div><div><label for='otherComments'>Other Comments</label>"+mailDetails.otherComments+"</div>"
        });

        console.log("message sent: %s", info.messageId);
}

module.exports = mail;

