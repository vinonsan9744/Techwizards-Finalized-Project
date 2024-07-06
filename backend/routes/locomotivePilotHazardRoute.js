const express=require('express')

const router=express.Router();

const{createTask,getTasks,getTaskByHazardID,deleteTaskByHazardID}=require("../controllers/locomotivePilotHazardController")


router.post("/",createTask);
router.get("/",getTasks);
router.get('/hazardID/:hazardID',getTaskByHazardID);
router.delete('/hazardID/:hazardID',deleteTaskByHazardID);


module.exports = router;