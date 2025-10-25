import "dotenv/config";
import express, { Application } from "express";
import cors from "cors";
import { proposicaoRoutes, glossarioRoutes, votacaoRoutes } from "./routes";

const app: Application = express();

app.use(express.json());
app.use(cors());

app.use(proposicaoRoutes);
app.use(glossarioRoutes);
app.use(votacaoRoutes);

export default app;