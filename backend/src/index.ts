import { dbConnection } from "@infra/database/dbConnection";
import app from "@app/app";

const url = process.env.MONGO_URL!;

const PORT = process.env.PORT || 8080;

dbConnection(url).then(() => {
  app.listen(PORT, () => {
    console.log(`🚀 O servidor está sendo executado na porta: ${PORT}`);
  });
});