import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../services/produto.service';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {

  constructor(private produtoService: ProdutoService) { }

  ngOnInit() {

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


}
