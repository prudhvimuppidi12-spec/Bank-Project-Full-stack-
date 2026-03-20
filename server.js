const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const authRoutes = require("./routes/authRoutes");
const accountRoutes = require("./routes/accountRoutes");
const transactionRoutes = require("./routes/transactionRoutes");
const loanRoutes = require("./routes/loanRoutes");
const adminRoutes = require("./routes/adminRoutes");

const notificationRoutes = require("./routes/notificationRoutes");

const app = express();

app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/bankDB")
.then(()=>console.log("DB Connected"));

app.use("/api/auth", authRoutes);
app.use("/api/account", accountRoutes);
app.use("/api/transactions", transactionRoutes);
app.use("/api/loans", loanRoutes);
app.use("/api/admin", adminRoutes);


app.use("/api/notifications", notificationRoutes);

app.listen(5000, ()=>console.log("Server running"));