import express from "express";

import { createAsset, linkUserAssets } from "../controllers/assetController";
import { validateToken } from "../middlewares/validateTokenHandler";

export const assetRouter = express.Router();

assetRouter.post("/", validateToken, createAsset);
assetRouter.patch("/link-to-user", validateToken, linkUserAssets);
