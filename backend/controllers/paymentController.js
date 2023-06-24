const Payment = require("./../models/paymentModel");

exports.getAllPayments = async (req, res) => {
  console.log(req);
  try {
    const payments = await Payment.find();
    console.log(payments);

    res.status(200).json({
      status: "success",
      results: payments.length,
      data: {
        payments,
        // msg: "OK",
      },
    });
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: error,
    });
  }
};

exports.getPayment = async (req, res) => {
  
  try {
    const payment = await Payment.findById(req.params.id);
    res.status(200).json({
      status: "success",

      data: {
        payment,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: "Invalid data sent",
    });
  }
};

exports.createPayment = async (req, res) => {
  try {
    const newPayment = await Payment.create(req.body);

    res.status(201).json({
      status: "success",

      data: {
        payment: newPayment,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error,
    });
  }
};

exports.deletePayment = async (req, res) => {
  try {
    const tour = await Payment.findByIdAndDelete(req.params.id);

    res.status(204).json({
      status: "succes",
      data: null,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error,
    });
  }
};
