import { IGlossarioLegislativoRepository } from "@core/repositories/IGlossarioLegislativoRepository";
import { Termo } from "../models/Termo";

export class GlossarioLegislativoService {

  constructor(private repository: IGlossarioLegislativoRepository) { }

  public async getAll(): Promise<Termo[]> {
    const termos = await this.repository.findAll();

    if (!termos) {
      throw new Error(`Termos Legislativos não encontrados.`);
    }

    return termos;
  }

}


