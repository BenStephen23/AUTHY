 import express from "express";
 import dotenv from "dotenv"



 import { connectDB } from "./db/connectDB.js";

 import authRoutes from "./routes/auth.routes.js";

 dotenv.config();

 const app = express();
 const PORT = process.env.PORT || 3000;
 app.get("/", (req, res) => {
    res.send("hello world");
 });

 app.use("/api/auth", authRoutes)


 app.listen(PORT, () => {
    connectDB();
    console.log("Server running on port: ", PORT);  
 } )


  
