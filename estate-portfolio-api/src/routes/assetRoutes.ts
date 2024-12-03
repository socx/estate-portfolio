import express from "express";

import { createAsset } from "../controllers/assetController";
import { validateToken } from "../middlewares/validateTokenHandler";

export const assetRouter = express.Router();

assetRouter.post("/", validateToken, createAsset);
