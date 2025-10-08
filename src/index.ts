import "dotenv/config";
import express, { Application, Router, Request, Response } from "express";
import cors from "cors";
import { dbConnection } from "./database/dbConnection";
import { GlossarioLegislativoRepository } from "./database/GlossarioLegislativoRepository";

const url = process.env.MONGO_URL!;

const app: Application = express();

app.use(express.json());
app.use(cors());

const router = Router();

router.get("/", (req: Request, res: Response) => {
  res.send("Bem-vinde ao: comoVotou?");
});


router.get("/glossario", async (req: Request, res: Response) => {
  try {
    const repository = new GlossarioLegislativoRepository();
    const glossario = await repository.findAll();

    res.json(glossario);
  } catch (error) {
    console.error("Erro /glossario:", error);
    res.status(500).json({ message: "Erro ao buscar glossário" });
  };

});

app.use(router);

dbConnection(url).then(() => {
  app.listen(3000, () => {
    console.log("🚀 O servidor está sendo executado na porta: 3000")
  });
});

