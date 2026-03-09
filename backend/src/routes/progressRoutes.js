import express from "express"
import { protectRoute } from "../middleware/protectRoute.js";
import { getCourseProgress, markLessonComplete } from "../controllers/progressController.js";


const router=express.Router();


router.post("/progress/complete-lesson",protectRoute,markLessonComplete);

router.get("/progress",protectRoute,getCourseProgress);

export default router;