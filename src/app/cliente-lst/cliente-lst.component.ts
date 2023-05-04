
import { Component } from '@angular/core';
import { Cliente } from '../models/cliente';

import { MatTableDataSource } from '@angular/material/table';
import { Router, ActivatedRoute } from '@angular/router';
import { ClienteService } from '../service/cliente.service';


@Component({
  selector: 'app-cliente-lst',
  templateUrl: './cliente-lst.component.html',
  styleUrls: ['./cliente-lst.component.css']
})
export class ClienteLstComponent {
  displayedColumns: string[] = ['acoes', 'id', 'pedido', 'descricao', 'numeroPedido', 'logradouro', 'numero', 'bairro', 'cidade'];

  dataSource = new MatTableDataSource<Cliente>();

  /**
   *
   */
  constructor(private router: Router, private route: ActivatedRoute,
    private clienteService: ClienteService ) {

      this.obterTodos();

  }
  novo():void{
    this.router.navigate(['/cliente/novo']);

  }
  obterTodos():void{
    this.dataSource.data = this.clienteService.obterTodos();

  }
  remover(id:number):void{

    var result =confirm("Deseja realmente remover o cliente!");
    ind:Number;


    if (result) {
      this.clienteService.remover(id);

      this.obterTodos();
    }

  }

  alterar(id:number):void{

    this.router.navigate(['/cliente/editar/' + id]);

  }

}

