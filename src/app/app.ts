import "dotenv/config";
import express, { Application } from "express";
import cors from "cors";
import { proposicoesRoutes, glossarioRoutes } from "./routes";

const app: Application = express();

app.use(express.json());
app.use(cors());

app.use(proposicoesRoutes);
app.use(glossarioRoutes);

export default app;