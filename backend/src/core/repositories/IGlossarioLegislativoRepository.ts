import { Termo } from "@core/models/Termo";

export interface IGlossarioLegislativoRepository {
  findAll(): Promise<Termo[]>;
}