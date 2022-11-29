import mentorsModel from "../models/mentorsModel.js";
import fileService from "./fileService.js";

class mentorServices {
  async create(studentСouncil, image){
    const fileName = fileService.saveFile(image);
    const newAdmin = await mentorsModel.create({...studentСouncil, "image": fileName});
    return newAdmin
  }
  
  async update(body){
    if(!body._id) throw new Error("Id is not defined");
    const updated = await mentorsModel.findByIdAndUpdate(body._id, body, {new: true});
    return updated;
  }

  async getAll(){
    const studentСouncil = await mentorsModel.find();
    return studentСouncil
  }

  async getOne(id){
    if(!id) throw new Error("Id is not defined");
    const studentСouncil = await mentorsModel.findById(id);
    return studentСouncil;
  }

  async delete(id){
    if(!id) throw new Error("Id is not defined");
    const studentСouncil = await mentorsModel.findByIdAndRemove(id);
    return studentСouncil;
  }
}

export default new mentorServices();