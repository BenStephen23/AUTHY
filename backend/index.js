 import express from "express";
 import dotenv from "dotenv"



 import { connectDB } from "./db/connectDB.js";

 dotenv.config();

 const app = express();
 

 app.use("/", (req, res) => {
    res.send("hello world 3000");
 });


 app.listen(3001, () => {
    connectDB();
    console.log("Server running on port 3000");  
 } )

//  Aiayd5IOOLiJawU8
  
