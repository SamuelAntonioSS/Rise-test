import express from "express";

const router = express.Router();

router
.route("/")
.post()


router
.route("/:id")
.put()
.delete()

export default router;