import { Router } from "express";
import activistsControllers from "./controllers/activistsControllers.js";

export const router = new Router ()

router.post("/activists", activistsControllers.create);
router.get("/activists", activistsControllers.getAll);
router.get("/activists/:id", activistsControllers.getOne)
router.put("/activists", activistsControllers.update)
router.delete("/activists/:id", activistsControllers.delete)

