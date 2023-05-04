import { Endereco } from "./endereco";

export abstract class Pessoa {
  id!:Number;
  pedido!:String;
  descricao!:String;
  numeroPedido!:String;
  endereco: Endereco = new Endereco();
}