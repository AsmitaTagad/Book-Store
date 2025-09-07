import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import userRoutes from "./routes/user.js";

dotenv.config();
connectDB();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api", userRoutes);

// Start server
const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Server running on port : http://localhost:${PORT}`));
