import express from "express";
import { applyJob, getUserApplications } from "../controllers/jobAppController.js";
import { protectRoute } from "../middleware/protectRoute.js"; // auth middleware to protect route

const router = express.Router();

// Apply for a job
router.post("/jobs/:jobId/apply", protectRoute, applyJob);

// Get all applications of logged-in user
router.get("/job/applied", protectRoute, getUserApplications);

export default router;