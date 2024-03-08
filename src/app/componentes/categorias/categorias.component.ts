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

  constructor(private produtoService: ProdutoService, private _sanitizer: DomSanitizer, private router:Router) { }

  ngOnInit() {
    this.recebeCategorias()
    this.recebeProdutos(this.categoria)
  }


  recebeProdutos(categoria: any){
    this.produtoService.getProdutoCategoria(categoria).subscribe((res: any) => {
      this.produtos = res.produtos;
      this.categoria = this.produtos[0].categoria;

      this.produtos.forEach((element: any, index: number) => {
        element.miniatura = this._sanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,' + element.miniatura);
      });
        
    })
  }

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
    //pegar a chave do objeto
    this.categorias = Object.keys(this.categorias)
  })
}

redirecionarParaOproduto(id: any) {
  localStorage.setItem('idProduto', id);
  this.router.navigate(['/produto']);
}

}
