import express from "express";
import doctorsControllers from "../controllers/doctorsControllers.js";

const router = express.Router();

router
.route("/")
.get(doctorsControllers.getdoctors)


router
.route("/:id")
.put(doctorsControllers.deletedoctors)
.delete(doctorsControllers.updatedoctors)

export default router;