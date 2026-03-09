import JobApp from "../models/job/jobAppModel.js";

// Apply for a job
export const applyJob = async (req, res) => {
  try {
    const { jobId } = req.params;
    const userId = req.user._id; // Assuming user is authenticated and req.user is available

   
    const existingApp = await JobApp.findOne({ user: userId, job: jobId });
    if (existingApp) {
      return res.status(400).json({ message: "You have already applied for this job." });
    }

    const newApplication = await JobApp.create({
      user: userId,
      job: jobId,
      Status: "Applied", // Default status
    });

    res.status(201).json(newApplication);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get all applications of a user
export const getUserApplications = async (req, res) => {
  try {
    const userId = req.user._id;
    const applications = await JobApp.find({ user: userId })
      .populate("job") // Populate job details
      .populate("user", "name email"); // Optional: populate user info

    res.json(applications || []);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};