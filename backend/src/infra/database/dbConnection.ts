import mongoose from "mongoose";

export async function dbConnection(url: string) {
  try {
    await mongoose.connect(url);
    console.log('🟢 Conectado com sucesso ao MongoDB Atlas');

  } catch (error) {
    console.log('🔴 Erro ao tentar conexão com o MongoDB Atlas', error);
    process.exit(1);
  }
}

