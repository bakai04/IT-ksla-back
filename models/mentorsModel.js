import mongoose from "mongoose";

const mentorModel = new mongoose.Schema({
  name: {type: String, required: true},
  position: {type: String, required: true},
  image: {type: String, required: true}
})

export default mongoose.model("mentors", mentorModel);