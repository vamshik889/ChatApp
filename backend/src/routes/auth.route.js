import express from "express";
import { signup,login,logout,updateProfile,checkAuth } from "../controllers/auth.controller.js";
import { protectRoute } from "../middlewares/auth.middleware.js";
import multer from "multer";
const upload = multer({ limits: { fileSize: 5 * 1024 * 1024 } }); // 5MB limit

const router = express.Router()

router.post("/signup",signup)
router.post("/login",login)
router.post("/logout",logout)
router.post("/update-profile",protectRoute,updateProfile)
router.get("/check",protectRoute,checkAuth)


export default router