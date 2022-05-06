import { Produto } from "./Produto";

export class Usuario {
  public id: number;
  public nome: string;
  public emailUsuario: string;
  public foto: string;
  public senha: string;
  public tipo: string;
  public telefone: string;
  public identidade: string;
  public cep: string;
  public nCasa: string;
  public refCasa: string;
  public nomeCompleto: string;
  public nCartao: string;
  public validadeCartao: string;
  public cvv: string;
  public produto: Produto[];
}