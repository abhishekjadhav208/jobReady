import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";


import cookieParser from "cookie-parser";
import { connectDB } from "./lib/db.js";
import courseRoutes from "./routes/courseRoutes.js";
import authRoutes from "./routes/authRoutes.js"
import jobRoutes from "./routes/jobRoutes.js"
import jobAppRoutes from "./routes/jobAppRoutes.js"
import progressRoute from "./routes/progressRoutes.js"
import path from "path"

const app = express();
const PORT = process.env.PORT || 5001;

const __dirname = path.resolve();


//middlewares
app.use(cors({
  origin: "http://localhost:5173",
  credentials: true,
}));


app.use(express.json({limit:"50mb"}));
app.use(express.urlencoded({limit:"50mb",extended:true}));
app.use(cookieParser());


//api routes
app.use("/api/auth", authRoutes);
app.use("/api/courses", courseRoutes);
app.use("/api",jobRoutes);
app.use("/api", jobAppRoutes);
app.use("/api",progressRoute);

app.use(express.static(path.join(__dirname ,"/frontend/dist")));

app.get(/.*/, (req, res) => {
  res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
});

//Start server
app.listen(PORT, async () => {
  console.log("Server is running on port " + PORT);
  await connectDB();
});


