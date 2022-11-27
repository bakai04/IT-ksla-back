import express from 'express';
import fileUpload from "express-fileupload";
import mongoose from "mongoose";
import { router } from "./routes.js";

let app = express();
const DB_URL = "mongodb+srv://admin:admin@cluster0.bpebnq7.mongodb.net/?retryWrites=true&w=majority";

app.use(express.json());
app.use(fileUpload({}))
app.use("/api", router);

async function startApp(){
  try{
    await mongoose.connect(DB_URL, {   
      useUnifiedTopology: true,
      useNewUrlParser: true, })
    app.listen(5000, ()=>console.log("server started work"))
  }catch(e){
    console.log(e);
  }
}

startApp();
