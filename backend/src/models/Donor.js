const mongoose = require('mongoose');

const donorSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Nama donatur harus diisi'],
      trim: true,
    },
    email: {
      type: String,
      required: [true, 'Email harus diisi'],
      unique: true,
      lowercase: true,
      match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Email tidak valid'],
    },
    phone: {
      type: String,
      required: [true, 'Nomor telepon harus diisi'],
      unique: true,
    },
    address: {
      street: String,
      city: String,
      province: String,
      zipCode: String,
    },
    totalDonation: {
      type: Number,
      default: 0,
    },
    donationCount: {
      type: Number,
      default: 0,
    },
    lastDonationDate: Date,
    isActive: {
      type: Boolean,
      default: true,
    },
    notificationPreferences: {
      whatsapp: { type: Boolean, default: true },
      email: { type: Boolean, default: true },
      sms: { type: Boolean, default: false },
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Donor', donorSchema);
