import express from "express";
import "dotenv/config";
import mongoose from "mongoose"

const app = express();

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO);
    } catch (err) {
     throw err;
    }
}

mongoose.connection.on('disconnected', () => {
    console.log('MongoDB default connection disconnected');
});

mongoose.connection.on("connected", () => {
  console.log(`MongoDB default connection open to MongoDB`);
});

app.listen(process.env.PORT, () => {
    connect()
  console.log(`Server is running on port ${process.env.PORT}`);
});
