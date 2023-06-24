const express = require("express");
const paymentRouter = require("./routes/paymentRoutes");
const app = express();
const morgan = require("morgan");
app.use(express.json());
app.use(express.static(`${__dirname}/public`));

app.use("/api/v1/payments", paymentRouter);

module.exports = app;
