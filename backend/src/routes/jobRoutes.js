import express from "express"
import { getAllJob, getOneJob } from "../controllers/jobController.js";
import { getAppliedJobs } from "../controllers/jobController.js";
import { protectRoute } from "../middleware/protectRoute.js";
const router=express.Router();

router.get("/jobs",getAllJob);


router.get("/jobs/applied",protectRoute, getAppliedJobs);
router.get("/jobs/:jobId",getOneJob);

// jobRoutes.js



export default router;