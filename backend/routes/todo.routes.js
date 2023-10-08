const express = require("express");
const router = express.Router();
const todoController = require("../controllers/todo.controller")

router.get("/", todoController.read);
router.post("/:title-:priotity", todoController.create);
router.put("/:id", todoController.update);
router.delete("/:id", todoController.delete);

module.exports = router;