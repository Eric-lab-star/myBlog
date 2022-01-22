import express from "express";
import { getAllVideos } from "../controllers/videoController";
const videoRouter = express.Router();

videoRouter.get("/", getAllVideos);

export default videoRouter;
