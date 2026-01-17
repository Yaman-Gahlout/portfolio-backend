const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();
const cors = require("cors");
const route = require("./routes/mail.route");

app.use(
  cors({
    origin: "https://yaman-gahlout-portfolio.vercel.app",
    credentials: true,
  }),
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use("/api", route);
app.get("/", (req, res) => {
  res.send("Response Sent");
});

app.listen(8000, () => {
  console.log(`Server is running at 8000 port`);
});
