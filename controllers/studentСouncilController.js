import studentСouncilService from "../services/studentСouncilService.js";

class studentСouncilController {
  async create(req, res){
    try{
      const studentСouncil = await studentСouncilService.create(req.body, req.files.image);
      res.json(studentСouncil);
    }catch(e){
      res.status(500).json(e);
    }
  }

  async update(req, res){
    try {
      const updated = await studentСouncilService.update(req.body);
      return res.json(updated);
    } catch (e) {
      res.status(500).json(e);
    }
  }

  async getAll(req, res){
    try {
      const studentСouncil = await studentСouncilService.getAll();
      return res.json(studentСouncil)
    } catch (e) {
      res.status(500).json(e);
    }
  }

  async getOne(req, res){
    try {
      const {id} = req.params;
      const studentСouncil = await studentСouncilService.getOne(id);
      return res.json(studentСouncil);
    } catch (e) {
      res.status(500).json(e);
    }
  }

  async delete(req, res){
    try {
      const {id} = req.params;
      const studentСouncil = await studentСouncilService.delete(id);
      return res.json(studentСouncil);
    } catch (e) {
      res.status(500).json(e);
    }
  }
}

export default new studentСouncilController();