const mongoose = require("mongoose");
const HazardModel = require("../models/HazardModel");

// to create a post method 
const createTask = async(req,res)=>{
  const {hazardId, hazardType, time, hazardLocation, description } =req.body;
  try{
      const Hazard=await HazardModel.create({hazardId, hazardType, time, hazardLocation, description })
      res.status(200).json(Hazard)
  } catch(e){
      res.status(400).json({error: e.message});
  }

};
// Get all hazard tasks
const getTasks = async (req, res) => {
    try {
        const hazards = await HazardModel.find({});
        res.status(200).json(hazards);
    } catch (e) {
        res.status(400).json({ error: e.message });
    }
};

// Get a single hazard task by ID
const getSingleTask = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ message: 'Hazard not found' });
    }
    try {
        const singleTask = await HazardModel.findById(id);
        res.status(200).json(singleTask);
    } catch (e) {
        res.status(400).json({ error: e.message });
    }
};


module.exports = { createTask, getTasks, getSingleTask };
