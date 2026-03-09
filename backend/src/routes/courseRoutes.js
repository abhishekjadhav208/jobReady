import express from "express";
import {
  getAllCourses,
  getOneCourses,
} from "../controllers/courseController.js";
import { protectRoute } from "../middleware/protectRoute.js";
import { getLessons } from "../controllers/lessonController.js";
import { getModules } from "../controllers/moduleController.js";

const router = express.Router();

// course routes
router.get("/all-course", getAllCourses);

// module routes
router.get("/course/:courseId", getModules);

// Lesson routes
router.get("/module/:moduleId", getLessons);

//course dynamic route
router.get("/:id", getOneCourses);

export default router;