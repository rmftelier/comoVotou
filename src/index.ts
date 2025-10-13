import { dbConnection } from "@infra/database/dbConnection";
import app from "@app/app";

const url = process.env.MONGO_URL!;

dbConnection(url).then(() => {
  app.listen(3000, () => {
    console.log("🚀 O servidor está sendo executado na porta: 3000");
  });
});