const locomotivePilotHazardModel = require ("../models/locomotivePilotHazardModel");

// to create a post method 
const createTask = async(req,res)=>{

    const {hazardID,locomotivePilotID,locationName,hazardType,time,description} =req.body;
    try{
        const locomotivePilotHazard=await locomotivePilotHazardModel.create({hazardID,locomotivePilotID,locationName,hazardType,time,description})

        res.status(200).json(locomotivePilotHazard)
    } catch(e){
        res.status(400).json({error: e.message});
    }

};

// to create a Get method to all
const getTasks = async (req,res) => {
    try{
    const locomotivePilotHazard = await locomotivePilotHazardModel.find({});
    res.status(200).json(locomotivePilotHazard);
    } catch (e){
        res.status(400).jeson({ error:e.message});
    }
};

module.exports={createTask,getTasks};