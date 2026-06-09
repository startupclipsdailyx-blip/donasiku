# 🤝 Donasiku - Donation Management System

Aplikasi manajemen donasi terintegrasi dengan dashboard admin, laporan transaksi, notifikasi WhatsApp, payment gateway, dan fitur tabungan qurban.

## 🌟 Fitur Utama

### Admin Dashboard
- 📊 Analytics & Reporting
- 👥 Donor Management
- 💳 Transaction Tracking
- 📈 Revenue Reports
- 🔐 User Management & Roles

### Payment Gateway Integration
- 💰 Midtrans (Snap, Core API)
- 🔄 Flip (Transfer)
- 📱 iPaymu (Multi-channel)

### WhatsApp Notifications
- 🔔 Donation confirmations
- 📧 Payment reminders
- 📅 Qurban reminders
- 📊 Monthly reports

### Qurban Savings Feature
- 🐑 Qurban package selection
- 💾 Savings tracking
- 📅 Scheduled distribution
- 📋 Savings history

### Donor Portal
- ✅ Easy donation process
- 💳 Multiple payment options
- 📱 Mobile-friendly interface
- 🧮 Savings calculator
- 📊 Personal donation history

## 🏗️ Tech Stack

### Backend
- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB
- **Authentication**: JWT + OAuth2
- **API**: RESTful API

### Frontend
- **Framework**: React / Next.js
- **UI Library**: Tailwind CSS
- **State Management**: Redux / Context API
- **HTTP Client**: Axios
- **Charts**: Chart.js / Recharts

### Payment Integration
- **Midtrans SDK**: midtrans-client
- **Flip API**: Official Flip API
- **iPaymu API**: Official iPaymu API

### Notifications
- **WhatsApp Business API**: Official WhatsApp API
- **Queue System**: Bull/RabbitMQ

## 📁 Project Structure

```
donasiku/
├── backend/
│   ├── src/
│   │   ├── config/
│   │   ├── controllers/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── middleware/
│   │   ├── services/
│   │   ├── utils/
│   │   └── app.js
│   ├── tests/
│   ├── .env.example
│   ├── package.json
│   └── server.js
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── store/
│   │   ├── services/
│   │   ├── styles/
│   │   └── App.js
│   ├── public/
│   ├── package.json
│   └── .env.example
├── docs/
│   ├── API.md
│   ├── SETUP.md
│   └── FEATURES.md
└── docker-compose.yml
```

## 🚀 Quick Start

### Prerequisites
- Node.js >= 14
- MongoDB
- Yarn or NPM

### Backend Setup
```bash
cd backend
npm install
cp .env.example .env
npm start
```

### Frontend Setup
```bash
cd frontend
npm install
cp .env.example .env
npm start
```

## 📚 Documentation

- [API Documentation](./docs/API.md)
- [Setup Guide](./docs/SETUP.md)
- [Features Guide](./docs/FEATURES.md)

## 📝 License

MIT License

## 👥 Contributors

Startup Clips Daily X