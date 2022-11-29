import express from 'express';
import fileUpload from "express-fileupload";
import mongoose from "mongoose";
import { router } from "./routes.js";
// import swaggerUi from "swagger-ui-express";
// import swaggerDocument from './swagger.json' assert {type: 'json'};

const PORT = 5000;
let app = express();
const DB_URL = "mongodb+srv://admin:admin@cluster0.bpebnq7.mongodb.net/?retryWrites=true&w=majority";

app.use(express.json());
app.use(express.static("static"));
app.use(fileUpload({}));
app.use("/api", router);

function startApp(){
  try{
    mongoose.connect(DB_URL, {   
    useUnifiedTopology: true,
    useNewUrlParser: true, })
    app.listen(process.env.PORT || PORT);
  }catch(e){
    console.log(e);
  }
}

startApp();
