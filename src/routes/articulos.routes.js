import { Router } from "express";
import {
  getArticulos,
  createArticulo,
  deleteArticulo,
  updateArticulo,
  getArticulo,
} from "../controllers/articulos.controllers.js";

const router = Router();

router.get("/articulos", getArticulos);

router.get("/articulos/:codigo", getArticulo);

router.post("/articulos", createArticulo);

router.patch("/articulos/:codigo", updateArticulo);

router.delete("/articulos/:codigo", deleteArticulo);

export default router;
