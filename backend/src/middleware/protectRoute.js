import jwt from "jsonwebtoken";
import User from "../models/userModel.js"
export const protectRoute=async (req,res,next)=>{

    try {
        const token=req.cookies.jwt;
        if(!token){
        return res.status(401).json({message:"unauthorized No token provided"});
        }

        const decoded=jwt.verify(token,process.env.JWT_SECRET);
        if(!decoded){
            return res.status(400).json({message:"unautorized token is not valid"});
        }

        const user=await User.findById(decoded.userId).select("-password");
        if(!user){
            return res.status(400).json({message:"user not found"});
        }

        req.user=user;
        next();
    } 
    catch (error) {
        console.log("error in protected Route",error);
        return res.status(500).json({message:error.message});
    }
   
}