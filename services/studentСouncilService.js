import studentСouncilModel from "../models/studentСouncilModel.js";
import fileService from "./fileService.js";

class studentСouncilService {
  async create(studentСouncil, image){
    const fileName = fileService.saveFile(image);
    const newAdmin = await studentСouncilModel.create({...studentСouncil, "image": fileName});
    return newAdmin
  }
  
  async update(body){
    if(!body._id) throw new Error("Id is not defined");
    const updated = await studentСouncilModel.findByIdAndUpdate(body._id, body, {new: true});
    return updated;
  }

  async getAll(){
    const studentСouncil = await studentСouncilModel.find();
    return studentСouncil
  }

  async getOne(id){
    if(!id) throw new Error("Id is not defined");
    const studentСouncil = await studentСouncilModel.findById(id);
    return studentСouncil;
  }

  async delete(id){
    if(!id) throw new Error("Id is not defined");
    const studentСouncil = await studentСouncilModel.findByIdAndRemove(id);
    return studentСouncil;
  }
}

export default new studentСouncilService();