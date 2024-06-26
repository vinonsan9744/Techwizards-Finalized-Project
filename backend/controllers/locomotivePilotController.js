const locomotivePilotModel = require ("../models/locomotivePilotModel");

// to create a post method 
const createTask = async(req,res)=>{
    const {locomotivePilotID,locomotiveName,locomotivePhoneNo,locomotiveEmail,password} =req.body;
    try{
        const locomotivePilot=await locomotivePilotModel .create({locomotivePilotID,locomotiveName,locomotivePhoneNo,locomotiveEmail,password})
        res.status(200).json(locomotivePilot)
    } catch(e){
        res.status(400).json({error: e.message});
    }

};

// to get all -task GET
const getTasks = async (req,res) => {
    try{
    const locomotivePilot = await locomotivePilotModel.find({});
    res.status(200).json(locomotivePilot);
    } catch (e){
        res.status(400).jeson({ error:e.message});
    }
};


module.exports={createTask,getTasks};