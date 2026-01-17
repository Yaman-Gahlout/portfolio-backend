const { sendMail } = require("../utils/mail");

const sendEmail = async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    await sendMail(name, email, subject, message);

    res.status(200).json({ message: "Email sent successfully" });
  } catch (e) {
    console.log("Error while sending email : ", e);
  }
};

module.exports = { sendEmail };
