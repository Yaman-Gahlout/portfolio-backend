const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "smtp.gmail.com",
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: "yamangahlout19@gmail.com",
    pass: "sktaiikczmpgrclj",
  },
});

const sendMail = async (name, email, subject, message) => {
  const info = await transporter.sendMail({
    from: '"Yaman Gahlout" <yamangahlout19@gmail.com>', // sender address
    to: "yamangahlout123@gmail.com",
    subject: subject,
    html: `<p>${message}</p> <h4>Name: ${name}</h4><h4>Email : ${email}</h4>`, // HTML body
  });

  console.log("Message sent:", info.messageId);
};

module.exports = { sendMail };
