import "dotenv/config";
import express, { Application, Router, Request, Response } from "express";
import cors from "cors";
import { dbConnection } from "./database/dbConnection";
import { glossarioRoutes } from "./routes/glossarioLegislativo.routes";

const url = process.env.MONGO_URL!;

const app: Application = express();

app.use(express.json());
app.use(cors());

const router = Router();

router.get("/", (req: Request, res: Response) => {
  res.send("Bem-vinde ao: comoVotou?");
});


app.use(router);

app.use(glossarioRoutes);

dbConnection(url).then(() => {
  app.listen(3000, () => {
    console.log("🚀 O servidor está sendo executado na porta: 3000")
  });
});

