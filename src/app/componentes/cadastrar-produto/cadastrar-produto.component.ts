import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastrar-produto',
  templateUrl: './cadastrar-produto.component.html',
  styleUrls: ['./cadastrar-produto.component.css']
})
export class CadastrarProdutoComponent implements OnInit {

  modelo: any = 'iPhone 13';
  desconto: any = '30';
  preco: any = '1049,90';
  parcelado: any = '104,99';
  armazenamento: any = ['64', '128', '256'];
  descricao: any = 'Made possible by exploring innovative molded plywood techniques, Iskos-Berlins Soft Edge Chair blends strong curves with extreme lightness to create a three-dimensionality not usually possible with 2-D plywood.';

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.modelo, this.desconto, this.preco, this.armazenamento, this.descricao)
  }

  arrumaParcelado() {
    // Remove caracteres não numéricos
    this.preco = this.preco.replace(/\D/g, "");

    // Adiciona a vírgula como separador decimal
    this.preco = this.preco.replace(/(\d)(\d{2})$/, "$1,$2");

    // Adiciona o ponto como separador de milhar
    this.preco = this.preco.replace(/(?=(\d{3})+(\D))\B/g, ".");

    // Remove os pontos do preço
    let precoSemPonto = this.preco.replace(/\./g, "");

    // Calcula o valor da parcela
    this.parcelado = parseFloat(precoSemPonto) / 10;
    console.log(this.parcelado.toFixed(2)); // Mostra o valor com duas casas decimais
}
}
