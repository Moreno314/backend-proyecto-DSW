import express from "express";
import articulosRoutes from "./routes/articulos.routes.js";
import indexRoutes from "./routes/index.routes.js";

const app = express();

app.use(express.json());

app.use(indexRoutes);
app.use("/api", articulosRoutes);

app.use((req, res, next) => {
  res.status(404).json({
    message: "Endpoint No encontrado",
  });
});

export default app;
