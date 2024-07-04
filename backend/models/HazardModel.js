const mongoose = require('mongoose');
const { Schema } = mongoose;

const HazardSchema = new Schema(
    {
        hazardId: {
            type: String,
            unique: true
        },
        hazardType: {
            type: String,
            required: true,
            enum: ['Elephant', 'Bull', 'Landslide'] // corrected 'Potancial Hazard' to 'Potential Hazard'
        },
        time: {
            type: Date,
            default: Date.now
        },
        locationName: {
            type: String,
            required: true,
            // enum: ['jaffna'] // need to change if there are predefined locations
        },
        description: {
            type: String,
            
        },
    },
    {
        timestamps: true
    }
);
HazardSchema.pre('save', async function(next) {
    try {
      if (!this.isModified('hazardId') || !this.isNew) {
        return next();
      }
  
      // Generate hazard ID based on the first two letters of hazard type
      const firstLetter = this.hazardType.charAt(0).toUpperCase();
      const secondLetter = this.hazardType.charAt(1).toUpperCase();
      const idCount = await this.constructor.countDocuments({ hazardType: this.hazardType });
  
      const paddedCount = (idCount + 1).toString().padStart(3, '0');
      this.hazardId = `${firstLetter}${secondLetter}${paddedCount}`;
      next();
    } catch (err) {
      next(err);
    }
  });
const Hazard = mongoose.model('Hazard', HazardSchema);

module.exports = Hazard;