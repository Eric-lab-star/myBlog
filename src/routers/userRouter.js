import express from "express";
import { getAllUsers } from "../controllers/userRouter";
const userRouter = express.Router();

userRouter.get("/", getAllUsers);

export default userRouter;
