import mentorsServices from "../services/mentorsServices.js";

class studentСouncilController {
  async create(req, res){
    try{
      const studentСouncil = await mentorsServices.create(req.body, req.files.image);
      res.json(studentСouncil);
    }catch(e){
      res.status(500).json(e);
    }
  }

  async update(req, res){
    try {
      const updated = await mentorsServices.update(req.body);
      return res.json(updated);
    } catch (e) {
      res.status(500).json(e);
    }
  }

  async getAll(req, res){
    try {
      const studentСouncil = await mentorsServices.getAll();
      return res.json(studentСouncil)
    } catch (e) {
      res.status(500).json(e);
    }
  }

  async getOne(req, res){
    try {
      const {id} = req.params;
      const studentСouncil = await mentorsServices.getOne(id);
      return res.json(studentСouncil);
    } catch (e) {
      res.status(500).json(e);
    }
  }

  async delete(req, res){
    try {
      const {id} = req.params;
      const studentСouncil = await mentorsServices.delete(id);
      return res.json(studentСouncil);
    } catch (e) {
      res.status(500).json(e);
    }
  }
}

export default new studentСouncilController();