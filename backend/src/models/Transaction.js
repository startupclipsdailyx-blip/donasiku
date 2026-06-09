const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema(
  {
    transactionId: {
      type: String,
      unique: true,
      required: true,
    },
    donor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Donor',
      required: true,
    },
    amount: {
      type: Number,
      required: [true, 'Jumlah donasi harus diisi'],
      min: [1000, 'Minimum donasi Rp 1.000'],
    },
    type: {
      type: String,
      enum: ['regular', 'qurban', 'general'],
      default: 'regular',
    },
    paymentMethod: {
      type: String,
      enum: ['midtrans', 'flip', 'ipaymu', 'bank_transfer', 'cash'],
      required: true,
    },
    status: {
      type: String,
      enum: ['pending', 'success', 'failed', 'cancelled'],
      default: 'pending',
    },
    paymentDetails: {
      gatewayTransactionId: String,
      bankName: String,
      accountNumber: String,
      paymentTime: Date,
    },
    purpose: String,
    notes: String,
    isAnonymous: { type: Boolean, default: false },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Transaction', transactionSchema);
