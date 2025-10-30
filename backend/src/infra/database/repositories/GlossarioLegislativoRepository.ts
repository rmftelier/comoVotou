import { IGlossarioLegislativoRepository } from "@core/repositories/IGlossarioLegislativoRepository";
import { ITermo, termoModel } from "../models/termoModel";
import { Termo } from "@core/models/Termo";

export class GlossarioLegislativoRepository implements IGlossarioLegislativoRepository {

  private toEntity(doc: ITermo) {
    return {
      id: doc.id,
      sigla: doc.sigla,
      termo: doc.termo,
      descricao: doc.descricao,
      url: doc.url
    };
  };

  public async findAll(): Promise<Termo[]> {
    const glossario = await termoModel.find();
    return glossario.map(this.toEntity);
  };
}