import adminServices from "../services/adminServices.js";

class adminController {
  async create(req, res){
    try{
      const admin = await adminServices.create(req.body, req.files.image);
      res.json(admin);
    }catch(e){
      res.status(500).json(e);
    }
  }

  async update(req, res){
    try {
      const updated = await adminServices.update(req.body);
      return res.json(updated);
    } catch (e) {
      res.status(500).json(e);
    }
  }

  async getAll(req, res){
    try {
      const admins = await adminServices.getAll();
      return res.json(admins)
    } catch (e) {
      res.status(500).json(e);
    }
  }

  async getOne(req, res){
    try {
      const {id} = req.params;
      const admin = await adminServices.getOne(id);
      return res.json(admin);
    } catch (e) {
      res.status(500).json(e);
    }
  }

  async delete(req, res){
    try {
      const {id} = req.params;
      const admin = await adminServices.delete(id);
      return res.json(admin);
    } catch (e) {
      res.status(500).json(e);
    }
  }
}

export default new adminController();