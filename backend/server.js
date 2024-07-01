const express = require("express");
const app = express();
require("dotenv").config();
const mongoose = require("mongoose");
const cors = require("cors");

// Middleware to parse JSON requests
app.use(express.json());

// Define CORS options
const corsOptions = {
  origin: "http://localhost:5173", // Replace with your frontend URL
  methods: ["GET", "POST"], // Specify allowed HTTP methods
  allowedHeaders: ["Content-Type", "Authorization"], // Specify allowed headers
};

// Enable CORS with specific options
app.use(cors(corsOptions));

// Middleware for logging paths and methods
app.use((req, res, next) => {
  console.log("path: " + req.path + " method: " + req.method);
  next();
});

// Database connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT || 4000, () => {
      console.log(
        "DB Connected Successfully. Listening on port " +
          (process.env.PORT || 4000)
      );
    });
  })
  .catch((error) => console.log("DB connection error:", error));

// Routes
const locomotivePilotRoute = require("./routes/locomotivePilotRoute");
const AdministrativeOfficerRoute = require("./routes/AdministrativeOfficerRoute");

// Connect routes
app.use("/api/AdministrativeOfficer", AdministrativeOfficerRoute);
app.use("/api/locomotivePilot", locomotivePilotRoute);
