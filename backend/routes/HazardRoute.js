const express=require('express')
const mongoose = require("mongoose");

const router=express.Router();

const{createTask,
    getTasks,
    getSingleTask,
    // updateTask,
    // deleteTask,
    // getHazardsByLocation
    
}=require("../controllers/HazardControllers")


router.post("/",createTask);
router.get("/",getTasks);
router.get("/:id", getSingleTask);
// router.patch("/:id", updateTask);
// router.delete("/:id", deleteTask);
// router.get("/:location", getHazardsByLocation);


module.exports = router;