import express from "express"
import dotenv from "dotenv"
import cookieParser from "cookie-parser"

import authRoutes from "./Routes/authRoutes.js"
import msgRoutes from "./Routes/msgRoutes.js"
import userRoutes from "./routes/user_routes.js";

import connectMongodb from "./db/connect_db.js";

const app = express();


const PORT = process.env.PORT || 5000
dotenv.config();

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes)
app.use("/api/msg", msgRoutes)
app.use("/api/users", userRoutes);


app.listen(PORT, () => {
    connectMongodb();
    console.log(`Server Running on Port ${PORT}`)
});