// const mongoose = require("mongoose");
// const transactionsSchema = new mongoose.Schema({
//   id: {
//     type: Number,
//     required: [true, "Payment must have transaction id"],
//   },
//   products: [
//     {
//       productName: {
//         type: String,
//         required: [true, "Payment must have transaction name"],
//       },
//       producCategory: {
//         type: String,
//         required: [true, "Payment must have transaction category"],
//       },
//       productPrice: {
//         type: Number,
//         required: [true, "Payment must have transaction price"],
//       },
//       productDiscount: {
//         isDiscount: {
//           type: Boolean,
//           required: [true, "Payment must have information about discount"],
//         },
//         discountValue: {
//           type: Number,
//           required: [true, "Payment must have discount value"],
//         },
//       },
//     },
//   ],
// });

// const Transactions = mongoose.model("Transactions", transactionsSchema);

// module.exports = Transactions;
