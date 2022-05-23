import express from "express";
import "dotenv/config";
import mongoose from "mongoose"
import authRoute from "./routes/authRoute.js";
import usersRoute from "./routes/usersRoute.js";
import hotelsRoute from "./routes/hotelsRoute.js";
import roomsRoute from "./routes/roomsRoute.js";
import cookieParser from "cookie-parser";


const app = express();
app.use(cookieParser());
app.use(express.json());


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


app.use("/api/auth", authRoute);
app.use("/api/users", usersRoute);
app.use("/api/hotels", hotelsRoute);
app.use("/api/rooms", roomsRoute);

app.use((err, req, res, next) => {
    const errorStatus = err.status || 500;
    const errorMessage = err.message || "Something went wrong";
    res.status(errorStatus).json({ 
        success: false,
        status: errorStatus,
        message: errorMessage,
        stack: err.stack
     });
})


app.listen(process.env.PORT, () => {
    connect()
  console.log(`Server is running on port ${process.env.PORT}`);
});
