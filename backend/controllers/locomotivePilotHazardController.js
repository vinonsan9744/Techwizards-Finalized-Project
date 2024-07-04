const locomotivePilotHazardModel = require ("../models/locomotivePilotHazardModel");

// to create a post method 
const createTask = async(req,res)=>{
    const {hazardID,locomotivePilotID,Location,typeOfHazard,Time ,locomotivePilotEmail } =req.body;
    try{
        const locomotivePilotHazard=await locomotivePilotHazardModel.create({hazardID,locomotivePilotID,Location,typeOfHazard,Time,locomotivePilotEmail })
        res.status(200).json(locomotivePilotHazard)
    } catch(e){
        res.status(400).json({error: e.message});
    }

};

// to create a Get method to all
const getTasks = async (req,res) => {
    try{
    const administrativeOfficer = await administrativeOfficerModel.find({});
    res.status(200).json(administrativeOfficer);
    } catch (e){
        res.status(400).jeson({ error:e.message});
    }
};

module.exports={createTask,getTasks};