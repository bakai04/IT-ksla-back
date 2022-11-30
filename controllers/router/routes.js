import { Router } from "express";
import activistsControllers from "../activistsControllers.js";
import adminController from "../adminController.js";
import mentorsController from "../mentorsController.js";
import studentСouncilController from "../studentСouncilController.js";

export const router = new Router ()
router.get("/", (req, resp)=>{
  resp.send("enpoints available for you - /activists , /administration , /student-council");
});

router.post("/api/activists", activistsControllers.create);
router.get("/activists", activistsControllers.getAll);
router.get("/activists/:id", activistsControllers.getOne);
router.put("/activists", activistsControllers.update);
router.delete("/activists/:id", activistsControllers.delete);

router.post("/administration", adminController.create);
router.get("/administration", adminController.getAll);
router.get("/administration/:id", adminController.getOne);
router.put("/administration", adminController.update);
router.delete("/administration/:id", adminController.delete);

router.post("/student-council", studentСouncilController.create);
router.get("/student-council", studentСouncilController.getAll);
router.get("/student-council/:id", studentСouncilController.getOne);
router.put("/student-council", studentСouncilController.update);
router.delete("/student-council/:id", studentСouncilController.delete);

router.post("/mentors", mentorsController.create);
router.get("/mentors", mentorsController.getAll);
router.get("/mentors/:id", mentorsController.getOne);
router.put("/mentors", mentorsController.update);
router.delete("/mentors/:id", mentorsController.delete);