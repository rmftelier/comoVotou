import { GlossarioLegislativoRepository } from "../database/GlossarioLegislativoRepository";
import { Termo } from "../models/Termo";

export class GlossarioLegislativoService {

  constructor(private repository: GlossarioLegislativoRepository) { }

  public async getAll(): Promise<Termo[]>{
    const termos = await this.repository.findAll();

    return termos;
  }

}


