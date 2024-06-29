const LocationModel = require ("../models/LocationModel");

// to create a post method 
const createTask = async(req,res)=>{
    const {locationId,locationName,locationType,locationContactNumber} =req.body;
    try{
        const Location=await LocationModel.create({locationId,locationName,locationType,locationContactNumber})
        res.status(200).json(Location)
    } catch(e){
        res.status(400).json({error: e.message});
    }

};

// to create a Get method to all
const getTasks = async (req,res) => {
    try{
    const Location = await LocationModel.find({});
    res.status(200).json(Location);
    } catch (e){
        res.status(400).jeson({ error:e.message});
    }
};

module.exports={createTask,getTasks};