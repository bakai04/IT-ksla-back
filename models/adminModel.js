import mongoose from "mongoose";

const adminModel = new mongoose.Schema({
  name: {type: String, required: true},
  position: {type: String, required: true},
  image: {type: String, required: true}
})

export default mongoose.model("administration", adminModel);