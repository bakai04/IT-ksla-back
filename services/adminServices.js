import adminModel from "../models/adminModel.js";
import fileService from "./fileService.js";

class adminServices {
  async create(admin, image){
    const fileName = fileService.saveFile(image);
    const newAdmin = await adminModel.create({...admin, "image": fileName});
    return newAdmin
  }
  
  async update(body){
    if(!body._id) throw new Error("Id is not defined");
    const updated = await adminModel.findByIdAndUpdate(body._id, body, {new: true});
    return updated;
  }

  async getAll(){
    const admins = await adminModel.find();
    return admins
  }

  async getOne(id){
    if(!id) throw new Error("Id is not defined");
    const admin = await adminModel.findById(id);
    return admin;
  }

  async delete(id){
    if(!id) throw new Error("Id is not defined");
    const admin = await adminModel.findByIdAndRemove(id);
    return admin;
  }
}

export default new adminServices();