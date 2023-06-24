const express = require("express");
const paymentController = require("./../controllers/paymentController");

const { getAllPayments, createPayment, getPayment, deletePayment } =
  paymentController;

const router = express.Router();

router.route("/").get(getAllPayments).post(createPayment);
router.route("/:id").get(getPayment).delete(deletePayment);

module.exports = router;
