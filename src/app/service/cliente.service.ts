import { Injectable } from '@angular/core';
import { Cliente } from '../models/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor() { }
  clientes: Cliente[] = [];
  count:number  = 1;

 public inserir(cliente:Cliente):void{

    cliente.id = this.count;

    this.clientes.push(cliente);
    this.count = this.count + 1 ;
  }
  public obterTodos(): Cliente[] {

    return this.clientes;
  }

  //terminar
  public remover(id:number):boolean {

    var ind:number = -1;
    for (let i=0; i<=this.clientes.length; i++)  {
      if(this.clientes[i].id == id){
        ind = i;
        break;
      }
    }
    this.clientes.splice(ind, 1);
    console.log(this.clientes);
    return true;
  }

  //terminar e melhorar o id
  public alterar(cliente:Cliente): Cliente {
    var ind:number = -1;
      for (let i=0; i<=this.clientes.length; i++)  {
          if(this.clientes[i].id == cliente.id){
            ind = i;
            break;
          }
        }
        this.clientes[ind] = cliente;
        return cliente;
  }

  public obterPorId(id:number): Cliente {

    var ind:number = -1;
    for (let i=0; i<=this.clientes.length; i++)  {
      if(this.clientes[i].id == id){
        ind = i;
        break;
      }
    }
    return this.clientes[ind];
  }


}
