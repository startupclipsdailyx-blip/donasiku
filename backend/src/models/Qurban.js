const mongoose = require('mongoose');

const qurbanSchema = new mongoose.Schema(
  {
    donor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Donor',
      required: true,
    },
    packageType: {
      type: String,
      enum: ['domba', 'kambing', 'sapi_1_7', 'sapi_full'],
      required: true,
    },
    packagePrice: {
      type: Number,
      required: true,
    },
    totalSavings: {
      type: Number,
      default: 0,
    },
    targetAmount: {
      type: Number,
      required: true,
    },
    progress: {
      type: Number,
      default: 0,
    },
    status: {
      type: String,
      enum: ['active', 'completed', 'cancelled'],
      default: 'active',
    },
    targetYear: {
      type: Number,
      required: true,
    },
    completionDate: Date,
    savingsHistory: [
      {
        transactionId: mongoose.Schema.Types.ObjectId,
        amount: Number,
        date: Date,
      },
    ],
    distribution: {
      area: String,
      date: Date,
      quantity: Number,
      notes: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Qurban', qurbanSchema);
