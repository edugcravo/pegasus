import { Component, HostListener, OnInit } from '@angular/core';
import { ProdutoService } from '../services/produto.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  

  panelOpenState = false;

  constructor(private produtoService: ProdutoService) { }
  ngOnInit() {
    this.recebeProdutos()
  }

  images = [
    {source:'assets/imagens/iphone.png', alt:'Description for Image 1', title:'iPhone 13'},
    {source:'assets/imagens/iphone.png', alt:'Description for Image 2', title:'iPhone 11'},
    {source:'assets/imagens/iphone.png', alt:'Description for Image 3', title:'iPhone 15 Pro Max'},
    {source:'assets/imagens/iphone.png', alt:'Description for Image 4', title:'iPhone 15 '},
    {source:'assets/imagens/iphone.png', alt:'Description for Image 5', title:'iPhone 14 Pro Max'},
  ];

  imagesAcessorios = [
    {source:'assets/imagens/macbook_air_m1.avif', alt:'Description for Image 1', title:'MacBook Air m1'},
    {source:'assets/imagens/macbook_air_m2.avif', alt:'Description for Image 1', title:'MacBook Air m2'},
    {source:'assets/imagens/macbook_pro.png', alt:'Description for Image 2', title:'MacBook pro'},
  ]
  
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

  responsiveOptionsMac = [
    {
      breakpoint: '1024px',
      numVisible: 2,
      numScroll: 2
    },
    {
      breakpoint: '768px',
      numVisible: 1,
      numScroll: 1
    }
  ];

  recebeProdutos(){
    this.produtoService.getProdutos().subscribe((res: any) => {
      console.log(res)
    })
  }
}
