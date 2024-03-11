import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../../services/produto.service';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent implements OnInit {

  categoria = localStorage.getItem('categoria');
  produtos: any;
  categorias: any;
  estado: any = 'todos';

  constructor(private produtoService: ProdutoService, private _sanitizer: DomSanitizer, private router:Router) { }

  ngOnInit() {
    window.scrollTo(0, 0);
    this.recebeCategorias()
    this.recebeProdutos(this.categoria)
  }


  recebeProdutos(categoria: any){

    console.log(this.estado)
    this.estado = localStorage.getItem('estado')
    if(this.estado == 'novo' || this.estado == 'semi-novo'){
      this.mudaEstado()
      return
    }

      this.produtoService.getProdutoCategoria(categoria, this.estado).subscribe((res: any) => {
        this.produtos = res.produtos;
        this.categoria = this.produtos[0].categoria;
        console.log(this.produtos)
        this.produtos.forEach((element: any, index: number) => {
          element.miniatura = this._sanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,' + element.miniatura);
        });  
      })

  }

  mudaEstado(){
    console.log(this.estado)
    localStorage.setItem('estado', this.estado)
    if(this.estado == 'todos'){
      this.recebeProdutos(this.categoria)
    }else{
      this.produtoService.recebeProdutoPorEstadoEcategoria(this.estado, this.categoria).subscribe((res: any) => {
        console.log(res)
        this.produtos = res.produtos;
        this.produtos.forEach((element: any, index: number) => {
          element.miniatura = this._sanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,' + element.miniatura);
        });
  
      })
    }

  }

  semiNovo: any;



  formatarParcelado(preco: any): string {
    // Remove todos os caracteres não numéricos
    let precoNumerico = preco.replace(/\D/g, "");

    // Adiciona a vírgula como separador decimal
    precoNumerico = precoNumerico.replace(/(\d)(\d{2})$/, "$1,$2");

    // Calcula o valor da parcela
    let parcelado = parseFloat(precoNumerico) / 10;

    // Formata o valor da parcela
    return parcelado.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}


recebeCategorias(){
  this.produtoService.getCategorias().subscribe((res: any) => {
    this.categorias = res.categorias
    console.log(res)
    //adicionar a opção iphone(semi-novo) antes de tudo
    //pegar a chave do objeto
    this.categorias = Object.keys(this.categorias)
  })
}

redirecionarParaOproduto(id: any) {
  localStorage.setItem('idProduto', id);
  this.router.navigate(['/produto']);
}

}
