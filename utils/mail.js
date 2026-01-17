const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com", // ✅ CORRECT (not "service")
  port: 587, // ✅ Correct port for Gmail
  secure: false, // Must be false for 587
  connectionTimeout: 10000,
  greetingTimeout: 10000,
  socketTimeout: 10000, // true for 465, false for other ports
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
