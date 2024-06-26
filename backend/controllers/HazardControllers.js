const HazardModel = require ("../models/HazardModel");

// to create a post method 
const createTask = async(req,res)=>{
    const {hazardId,hazardType,time,location,description} =req.body;
    try{
        const Hazard=await HazardModel.create({hazardId,hazardType,time,location,description})
        res.status(200).json(Hazard)
    } catch(e){
        res.status(400).json({error: e.message});
    }

};

// to get all -task GET
const getTasks = async (req,res) => {
    try{
    const Hazard = await HazardModel.find({});
    res.status(200).json(Hazard);
    } catch (e){
        res.status(400).jeson({ error:e.message});
    }
};


// To get a single Task - GET
const getSingleTask = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ error: "Task Not Found" });
    }
    try {
      const Hazard = await HazardModel.findById(id);
      res.status(200).json(Hazard);
    } catch (e) {
      res.status(400).json({ error: e.message });
    }
  };

// To update a task - PATCH

const updateTask = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ error: "Task Not Found" });
    }
  
    try {
      const Hazard = await HazardModel.findByIdAndUpdate(
        {
          _id: id,
        },
        {
          ...req.body,
        }
      );
      res.status(200).json(Hazard);
    } catch (e) {
      res.status(400).json({ error: e.message });
    }
  };

// Delete task - DELETE

const deleteTask = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ error: "Task Not Found" });
    }
  
    try {
      const Hazard = await HazardModel.findByIdAndDelete(id);
      res.status(200).json(Hazard);
    } catch (e) {
      res.status(400).json({ error: e.message });
    }
  };
  
  



module.exports = {createTask,getTasks,updateTask,deleteTask,getSingleTask};