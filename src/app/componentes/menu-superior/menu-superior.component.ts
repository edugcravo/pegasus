import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { ProdutoService } from '../../services/produto.service';


interface Categoria {
  id: number;
  nome: string;
}
@Component({
  selector: 'app-menu-superior',
  templateUrl: './menu-superior.component.html',
  styleUrls: ['./menu-superior.component.css']
})


export class MenuSuperiorComponent implements OnInit {

  items: MenuItem[] | undefined;
  categorias: { [key: string]: Categoria[] } = {};


  constructor(private router: Router, private produtoService:ProdutoService) { }

  ngOnInit() {
    this.recebeCategorias();
    
  }

  redirecionaProduto(id: any){
    localStorage.setItem('idProduto', id);
    this.router.navigate(['/produto']);
  }

  redirecionaCategoria(categoria: any){
    // se tiver na pagina categorias ja recarregar a pagina
    if(this.router.url == '/categorias'){
      localStorage.setItem('categoria', categoria);
      this.router.navigate(['/categorias']).then(() => {
        window.location.reload();
      });
    }
    localStorage.setItem('categoria', categoria);
    this.router.navigate(['/categorias']);
  }
  
  // pegar a categoria do produto
  recebeCategorias(){
    this.produtoService.getCategorias().subscribe((dados: any) => {
      this.categorias = dados.categorias;
      console.log(this.categorias)
    });
  }

  

}
