import { ITermo, termoModel } from "./termoModel";

export class GlossarioLegislativoRepository {

  private toEntity(doc: ITermo) {
    return {
      id: doc.id,
      sigla: doc.sigla,
      termo: doc.termo,
      descricao: doc.descricao
    };
  };

  public async findAll() {
    const glossario = await termoModel.find();
    return glossario.map(this.toEntity);
  }
}