import { Produto } from "./Produto";

export class Categoria {
  public id: number;
  public servicos: string;
  public promocao: string;
  public tipo: string;
  public produto: Produto[];

}