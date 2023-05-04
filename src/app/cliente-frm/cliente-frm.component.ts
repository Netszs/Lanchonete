import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from '../models/cliente';
import { ClienteService } from '../service/cliente.service';

@Component({
  selector: 'app-cliente-frm',
  templateUrl: './cliente-frm.component.html',
  styleUrls: ['./cliente-frm.component.css']
})
export class ClienteFrmComponent implements OnInit  {

  cliente: Cliente = new Cliente();
  id:number = 0;

  constructor(private router: Router, private route: ActivatedRoute, private clienteService: ClienteService ) {

  }

  salvar() {
    if(this.id > 0){
      this.cliente.id = this.id;
      this.clienteService.alterar(this.cliente);

    }
    else {
      this.clienteService.inserir(this.cliente);

    }
    console.log(this.cliente);

    this.router.navigate(['/clientes']);
  }

  ngOnInit(): void {

    //recuperar o valor do id da rota
    //recupeerar o objeto da lista
    //carregar a tela
    this.route.paramMap.subscribe(params => {
      if(params.get('id') != null){
      this.id = Number(params.get('id'));
      console.log(this.id);
      this.carregarCliente(this.id);
      }
    });
  };

  carregarCliente(id:number):void{
    this.cliente =  this.clienteService.obterPorId(id);

  }

  voltar(){

    this.router.navigate(['/clientes']);
  }
}
