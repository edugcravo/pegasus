import { Component, HostListener, OnInit } from '@angular/core';
import { ProdutoService } from '../../services/produto.service';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  

  panelOpenState = false;
  produtos_iphone: any;
  produtos_mac: any;

  constructor(private produtoService: ProdutoService, private _sanitizer:DomSanitizer, private router: Router) { }
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
      // colcoar os produtos com categoria iphone na variavel produtos_iphone e os com categoria mac na variavel produtos_mac
      this.produtos_iphone = res.produtos.filter((produto: any) => produto.categoria === 'iphone');


      this.produtos_mac = res.produtos.filter((produto: any) => produto.categoria === 'macbook');

       this.produtos_iphone.forEach((element: any) => {
        element.miniatura = this._sanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,' + element.miniatura);
       });

        this.produtos_mac.forEach((element: any) => {
          element.miniatura = this._sanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,' + element.miniatura);
        });
    

    })
  }

  maiorArmazenamento(produtos: any[]): string {
    let maior = 0;
    produtos.forEach((produto) => {
      produto.armazenamento.forEach((armazenamento: any) => {
        const gb = parseInt(armazenamento.replace('GB', ''));
        if (gb > maior) {
          maior = gb;
        }
      });
    });
    return `${maior}GB`;
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

redirecionarParaOproduto(id: any) {
  localStorage.setItem('idProduto', id);
  this.router.navigate(['/produto']);
}

redirecionarParaWhatsapp() {
  // Número de telefone do WhatsApp (substitua pelo seu número)
  const numeroWhatsapp = '5541999802380';
  // Mensagem pré-pronta
  const mensagem = 'Olá, gostaria de saber mais sobre os serviços da empresa';

  // Cria o link para o WhatsApp com o número e a mensagem
  const url = `https://wa.me/${numeroWhatsapp}?text=${encodeURIComponent(mensagem)}`;

  // Redireciona para o WhatsApp
  window.open(url, '_blank');
}
  
}
