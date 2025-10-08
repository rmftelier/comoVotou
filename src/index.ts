import express, { Application, Router, Request, Response } from "express";
import cors from "cors";

const app: Application = express();

app.use(express.json());
app.use(cors());

const router = Router();

router.get("/", (req: Request, res: Response) => {
  res.send("Bem-vinde ao como Votou?");
});

app.use(router);

app.listen(3000, () => {
  console.log("🚀 O servidor está sendo executado na porta: 3000")
});