require('dotenv').config();

module.exports = {
  PORT: process.env.PORT || 5000,
  NODE_ENV: process.env.NODE_ENV || 'development',
  MONGODB_URI: process.env.MONGODB_URI || 'mongodb://localhost:27017/donasiku',
  REDIS_URL: process.env.REDIS_URL || 'redis://localhost:6379',
  JWT_SECRET: process.env.JWT_SECRET || 'your-secret-key-change-in-production',
  JWT_EXPIRE: process.env.JWT_EXPIRE || '7d',
  MIDTRANS_SERVER_KEY: process.env.MIDTRANS_SERVER_KEY,
  MIDTRANS_CLIENT_KEY: process.env.MIDTRANS_CLIENT_KEY,
  FLIP_API_KEY: process.env.FLIP_API_KEY,
  FLIP_API_URL: process.env.FLIP_API_URL || 'https://api.flip.id',
  IPAYMU_API_KEY: process.env.IPAYMU_API_KEY,
  IPAYMU_VA_CODE: process.env.IPAYMU_VA_CODE,
  WHATSAPP_API_KEY: process.env.WHATSAPP_API_KEY,
  WHATSAPP_API_URL: process.env.WHATSAPP_API_URL,
  WHATSAPP_PHONE_ID: process.env.WHATSAPP_PHONE_ID,
  ADMIN_EMAIL: process.env.ADMIN_EMAIL || 'admin@donasiku.com',
  FRONTEND_URL: process.env.FRONTEND_URL || 'http://localhost:3000',
};
