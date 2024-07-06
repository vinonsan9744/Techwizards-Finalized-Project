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

// GET method to retrieve a task by hazardID
const getTaskByHazardID = async (req, res) => {
    const { hazardID } = req.params;
    try {
        const locomotivePilotHazard = await locomotivePilotHazardModel.findOne({ hazardID });
        if (!locomotivePilotHazard) {
            return res.status(404).json({ error: 'Hazard not found' });
        }
        res.status(200).json(locomotivePilotHazard);
    } catch (e) {
        res.status(400).json({ error: e.message });
    }
};

// DELETE method to delete a task by hazardID
const deleteTaskByHazardID = async (req, res) => {
    const { hazardID } = req.params;
    try {
        const result = await locomotivePilotHazardModel.findOneAndDelete({ hazardID });
        if (!result) {
            return res.status(404).json({ error: 'Hazard not found' });
        }
        res.status(200).json({ message: 'Hazard deleted successfully', deletedHazard: result });
    } catch (e) {
        res.status(400).json({ error: e.message });
    }
};
module.exports={createTask,getTasks,getTaskByHazardID,deleteTaskByHazardID};