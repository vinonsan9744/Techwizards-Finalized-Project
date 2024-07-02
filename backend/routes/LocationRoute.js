const express=require('express')

const router=express.Router();

const{createTask,getTasks}=require("../controllers/LocationController")

router.post("/",createTask);
router.get("/",getTasks);

module.exports = router;