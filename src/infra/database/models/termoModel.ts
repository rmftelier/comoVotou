import mongoose, { Schema, Document, Types } from "mongoose";

export interface ITermo extends Document {
  _id: Types.ObjectId;
  sigla: string,
  termo: string,
  descricao: string
};

const TermoSchema = new Schema<ITermo>({
  sigla: { type: String, required: true },
  termo: { type: String, required: true },
  descricao: { type: String, required: true }
});

export const termoModel = mongoose.model<ITermo>('Termo', TermoSchema); 