const { ObjectId } = require("mongodb");
const mongoose = require("mongoose");
// const slugify = require("slugify");
const validator = require("validator");

const paymentSchema = new mongoose.Schema({
  card: {
    name: {
      type: String,
      required: [true, "Payment must have name"],
    },
    owner: {
      _id: {
        type: String,
        required: [true, "Payment must have owner id"],
      },

      name: {
        type: String,
        required: [true, "Payment must have owner name"],
      },
      surname: {
        type: String,
        required: [true, "Payment must have surname"],
      },
    },
    // transactions: [{ type: Transactions }],
    transactions: [
      {
        product: String,
        category: String,
        price: Number,
      },
    ],
    // ref: "Transactions",
    // transactions: [
    //   {
    //     id: {
    //       type: Number,
    //       required: [true, "Payment must have transaction id"],
    //     },
    //     products: [
    //       {
    //         productName: {
    //           type: String,
    //           required: [true, "Payment must have transaction name"],
    //         },
    //         producCategory: {
    //           type: String,
    //           required: [true, "Payment must have transaction category"],
    //         },
    //         productPrice: {
    //           type: Number,
    //           required: [true, "Payment must have transaction price"],
    //         },
    //         productDiscount: {
    //           isDiscount: {
    //             type: Boolean,
    //             required: [
    //               true,
    //               "Payment must have information about discount",
    //             ],
    //           },
    //           discountValue: {
    //             type: Number,
    //             required: [true, "Payment must have discount value"],
    //           },
    //         },
    //       },
    //     ],
    //   },
    // ],
  },
});

// ,

// owner: {
//     name: {
//         type: String
//     },

//     surname: {
//         type: String
//     }
// }
// const paymentSchema = new mongoose.Schema({
//   card: {
//     name: {
//       type: String,
//       required: [true, "Card name is required"],
//       unique: true,
//       maxlength: [20, "Card name must have less than 20 characters"],
//       minlength: [3, "Card name must have 3 or more characters"],
//     },

//     expirationDate: {
//       type: Date,
//     },
//   },
//   data: {
//     transactions: [
//       {
//         type: {
//           type: String,
//           required: true,
//         },
//         amount: {
//           total: {
//             type: Number,
//             required: true,
//           },
//           currency: {
//             type: String,
//             required: true,
//           },
//         },
//         // items: [
//         //   {
//         //     product: {
//         //       type: String,
//         //       required: true,
//         //     },
//         //     productPrice: {
//         //       type: Number,
//         //       required: true,
//         //     },
//         //     productAmount: {
//         //       type: Number,
//         //       required: true,
//         //     },
//         //     productTotalValue: {
//         //       type: Number,
//         //       required: true,
//         //     },
//         //   },
//         // ],
//       },
//     ],

//     // payer: {
//     //   languageCode: {
//     //     type: String,
//     //     maxlength: [8, "Language code must have less than 8 characters"],
//     //     minlength: [3, "Language code must have 3 or more characters"],
//     //   },
//     //   payerDetails: {
//     //     personal: {
//     //       FirstName: {
//     //         type: String,
//     //         required: true,
//     //         unique: false,
//     //       },
//     //       LastName: {
//     //         type: String,
//     //         required: true,
//     //         unique: false,
//     //       },
//     //       Gender: {
//     //         type: String,
//     //         required: true,
//     //         maxlength: [6, "Gender must have less or equal than 6 characters"],
//     //         minlength: [4, "Gender must have at least 4 or more characters"],
//     //       },
//     //       Email: {
//     //         type: String,
//     //         validate: {
//     //           validator: validator.isEmail,
//     //           message: `{ VALUE } is not a valid email`,
//     //         },
//     //       },
//     //     },
//     //     adress: {
//     //       Street: {
//     //         type: String,
//     //         required: true,
//     //       },
//     //       Zip: {
//     //         type: String,
//     //         required: true,
//     //       },
//     //       City: {
//     //         type: String,
//     //         required: true,
//     //       },
//     //       CountryCode: {
//     //         type: String,
//     //         required: true,
//     //       },
//     //     },
//     //   },
//     // },
//   },
// });

const Payment = mongoose.model("Payments", paymentSchema);

module.exports = Payment;
