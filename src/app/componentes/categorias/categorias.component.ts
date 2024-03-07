import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../../services/produto.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent implements OnInit {

  categoria = localStorage.getItem('categoria');
  produtos: any;
  categorias: any;

  constructor(private produtoService: ProdutoService, private _sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.recebeCategorias()
    this.recebeProdutos()
  }


  recebeProdutos(){
    this.produtoService.getProdutoCategoria(this.categoria).subscribe((res: any) => {
      this.produtos = res.produtos;


      this.produtos.forEach((element: any, index: number) => {
        console.log(element)
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
    console.log(res)
    this.categorias = res.categorias
  })
}
}
