import JobApp from "../models/job/jobAppModel.js";
import Job from "../models/job/jobModel.js"

export const getAllJob= async (req,res)=>{
try {
    const job=await Job.find();
     res.json(job);
} catch (error) {
     res.status(500).json({message:error.message});
}
}

export const getOneJob=async (req,res)=>{
try {
    const {jobId}=req.params;
    const job = await Job.findById(jobId);
     res.json(job);
} catch (error) {
     res.status(500).json({message:error.message});
}
}


export const getAppliedJobs = async (req, res) => {
  try {
    if (!req.user) {
      return res.status(401).json({ message: "Not authenticated" });
    }

    const applied = await JobApp.find({ user: req.user._id }).populate("job");

    if (applied.length === 0) {
      return res.json({ message: "No applied jobs found", jobs: [] });
    }
    res.json(applied);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
