const express=require('express')

const router=express.Router();

const{createTask,
    getTasks,
    getFirstLastPostedData
}=require("../controllers/LocationController")

router.post("/",createTask);
router.get("/",getTasks);
router.get("/locationType/:locationType",getFirstLastPostedData);

module.exports = router;