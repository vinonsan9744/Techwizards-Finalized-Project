const express=require('express')
const mongoose = require("mongoose");

const router=express.Router();

const{createTask,
    getTasks,
    getSingleTask,
   
}=require("../controllers/HazardControllers")


router.post("/",createTask);
router.get("/",getTasks);
router.get("/:id",getSingleTask);



module.exports = router;