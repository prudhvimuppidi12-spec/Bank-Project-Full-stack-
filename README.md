# MyBank - Full Stack Banking Application

A professional full-stack banking web application built using the MERN stack.  
This project simulates real-world banking features like transactions, KYC verification, loans, and chatbot support.

---

## Features

-  User Authentication (JWT + bcrypt)
-  Deposit & Withdraw Money
-  Transfer Between Accounts
-  Transaction History
-  KYC Verification (PAN & Aadhaar)
-  Loan Application System
-  Notifications System
-  Banking Chatbot (50+ queries)
-  Graphs (Bar Chart for transactions)
- Premium UI with Bootstrap & FontAwesome

---

## Tech Stack

### Frontend
- React (Vite)
- Axios
- Bootstrap
- FontAwesome
- Chart.js

### Backend
- Node.js
- Express.js
- MongoDB (Mongoose)
- JWT (Authentication)
- bcryptjs (Security)
- CORS


##  API Endpoints

### Auth
- POST /api/auth/register
- POST /api/auth/login

### Account
- POST /api/account/deposit
- POST /api/account/withdraw
- POST /api/account/kyc

### Transactions
- POST /api/transactions/transfer
- GET /api/transactions

### Loans
- POST /api/loans/apply
- GET /api/loans

### Notifications
- GET /api/notifications



## Authentication

- Passwords are encrypted using bcrypt
- JWT is used for secure authentication
- Token-based access for protected routes



##  Graphs

- Bar chart representation of:
  - Deposits (Green)
  - Withdrawals (Red)
  - Transfers (Yellow)



##  Chatbot

- Rule-based chatbot
- Supports 50+ banking-related queries
- Provides instant user assistance



##  Challenges Faced

- Handling JWT authentication
- Fixing API errors (404, 500)
- Managing frontend-backend integration
- Debugging transaction updates
- Designing professional UI


## Future Enhancements

- AI-based chatbot
- UPI integration
- Email/SMS notifications
- Mobile application
- Advanced security features



##  Conclusion

This project demonstrates real-world banking functionalities with a modern UI and secure backend, making it suitable for learning and showcasing full-stack development skills.
---

## 📂 Project Structure
