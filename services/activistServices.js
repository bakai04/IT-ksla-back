import ActivistsModel from "../models/activistsModel.js";
import fileService from "./fileService.js";

class activistServices{
  async create(activist, image){
    const fileName = fileService.saveFile(image);
    const newActivist = await ActivistsModel.create({...activist, "image": fileName});
    return newActivist
  }
  
  async update(body){
    if(!body._id) throw new Error("Id is not defined");
    const updated = await ActivistsModel.findByIdAndUpdate(body._id, body, {new: true});
    return updated;
  }

  async getAll(){
    const activists = await ActivistsModel.find();
    return activists
  }

  async getOne(id){
    if(!id) throw new Error("Id is not defined");
    const activist = await ActivistsModel.findById(id);
    return activist
  }

  async delete(id){
    if(!id) throw new Error("Id is not defined");
    const activist = await ActivistsModel.findByIdAndRemove(id);
    return activist
  }
}

export default new activistServices()