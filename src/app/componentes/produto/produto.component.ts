import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../services/produto.service';
import { ActivatedRoute, Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {

  idProduto: any = localStorage.getItem('idProduto');
  produto: any;
  imagemPrincipal: any;
  
  constructor(private produtoService: ProdutoService, private route: ActivatedRoute, private router: Router, private _sanitizer:DomSanitizer) { }

  ngOnInit() {
    this.recebeProduto()
  }

  images = [
    {source:'assets/imagens/iphone.png', alt:'Description for Image 1', title:'iPhone 13'},
    {source:'assets/imagens/iphone.png', alt:'Description for Image 2', title:'iPhone 11'},
    {source:'assets/imagens/iphone.png', alt:'Description for Image 3', title:'iPhone 15 Pro Max'},
    {source:'assets/imagens/iphone.png', alt:'Description for Image 4', title:'iPhone 15 '},
    {source:'assets/imagens/iphone.png', alt:'Description for Image 5', title:'iPhone 14 Pro Max'},
  ];
  
  responsiveOptions = [
    {
      breakpoint: '1024px',
      numVisible: 3,
      numScroll: 3
    },
    {
      breakpoint: '768px',
      numVisible: 2,
      numScroll: 2
    },
    {
      breakpoint: '560px',
      numVisible: 1,
      numScroll: 1
    }
  ];

  recebeProduto(){
    this.produtoService.getProdutoId(localStorage.getItem('idProduto')).subscribe((res: any) => {
      console.log(res)
      this.produto = res.produto
      this.imagemPrincipal = this._sanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,' + this.produto.imagens[0]);
      // Sanitizar imagens
      this.produto.imagens.forEach((element: any, index: number) => {
        this.produto.imagens[index] = this._sanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,' + element);
      });
  
      console.log(this.produto)
    });
  }

  mudarFotoPrincipal(imagem: any){
    this.imagemPrincipal = imagem
  }
}
