import express from "express";
import {getFile, storeFile, upload} from "../controllers/file-controller.js";

const router = express.Router()

router.post("/upload",upload.single('file'), storeFile)
router.get("/download/:filename", getFile)

export default router