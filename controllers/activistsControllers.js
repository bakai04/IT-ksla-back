import activistServices from "../services/activistServices.js";

class activistsControllers {
  async create(req, res){
    try{
      const activist = await activistServices.create(req.body, req.files.image);
      res.json(activist);
    }catch(e){
      res.status(500).json(e);
    }
  }

  async update(req, res){
    try {
      const updated = await activistServices.update(req.body);
      return res.json(updated);
    } catch (e) {
      res.status(500).json(e);
    }
  }

  async getAll(req, res){
    try {
      const activists = await activistServices.getAll();
      return res.json(activists)
    } catch (e) {
      res.status(500).json(e);
    }
  }

  async getOne(req, res){
    try {
      const {id} = req.params;
      const activist = await activistServices.getOne(id);
      return res.json(activist);
    } catch (e) {
      res.status(500).json(e);
    }
  }

  async delete(req, res){
    try {
      const {id} = req.params;
      const activist = await activistServices.delete(id);
      return res.json(activist);
    } catch (e) {
      res.status(500).json(e);
    }
  }
}

export default new activistsControllers();