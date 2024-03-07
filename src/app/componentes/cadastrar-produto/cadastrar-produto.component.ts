import { Component, OnInit } from '@angular/core';
import { NzUploadChangeParam, NzUploadFile } from 'ng-zorro-antd/upload';
import { ProdutoService } from '../../services/produto.service';
import Swal from 'sweetalert2'

const getBase64 = (file: File): Promise<string | ArrayBuffer | null> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });
@Component({
  selector: 'app-cadastrar-produto',
  templateUrl: './cadastrar-produto.component.html',
  styleUrls: ['./cadastrar-produto.component.css']
})
export class CadastrarProdutoComponent implements OnInit {

  modelo: any = 'iPhone 13';
  desconto: any = '30';
  preco: any = '1.049,90';
  parcelado: any = '104,99';
  armazenamento: any = ['5','3', '1'];
  armazenamentoDemonstracao: any = [];
  descricao: any = 'Made possible by exploring innovative molded plywood techniques, Iskos-Berlins Soft Edge Chair blends strong curves with extreme lightness to create a three-dimensionality not usually possible with 2-D plywood.';
  cores: any = [];
  coresDemonstracao: any = [];
  imagens: any = []
  miniatura: any;
  categoria: any;

  constructor(private produtoService: ProdutoService) { }

  ngOnInit() {
    this.recebeCores()
    this.recebeArmazenamento()
  }

  onSubmit() {
    console.log(this.miniatura)
    let cores = this.cores.map((cor: any) => cor.id);
    let armazenamento = this.armazenamento.map((armazenamento: any) => armazenamento.id);

    if(this.modelo && this.desconto && this.preco && this.parcelado && this.armazenamento && this.descricao && this.cores && this.imagens){
      console.log('Formulário enviado');

    let dados = {
      id: 0,
      nome: this.modelo,
      desconto: this.desconto,
      preco: this.preco,
      cor: cores,
      armazenamento: armazenamento,
      descricao: this.descricao,
      //pegar somente a data
      data_cadastro: '',
      ativo: true,
      imagens: this.imagens,
      miniatura: this.miniatura,
      categoria: this.categoria
    }

    this.produtoService.cadastrarProduto(dados).subscribe((res: any) => {
      console.log(res)
      if(res.status == 200){
        Swal.fire({
          title: 'Sucesso!',
          text: 'Produto cadastrado com sucesso!',
          icon: 'success',
          confirmButtonText: 'Ok'
        })
      }else{
        Swal.fire({
          title: 'Erro!',
          text: 'Ocorreu um erro ao cadastrar o produto!',
          icon: 'error',
          confirmButtonText: 'Ok'
        })
      }

    })
  }

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

removeOuAdicionaArmazenamento(item: any) {
  console.log('teste')
  // if(this.armazenamento.includes(item)){
  //   this.armazenamento = this.armazenamento.filter((armazenamento: any) => armazenamento !== item);
  //   console.log(this.armazenamento)
  // } else {
  //   this.armazenamento.push(item);
  // }
  // console.log(this.armazenamento)
}

removeOuAdicionaCor(item: any) {
  if(this.cores.includes(item)){
    this.cores = this.cores.filter((cor: any) => cor !== item);
    console.log(this.cores)
  } else {
    this.cores.push(item);
  }
}

previewImage: string | undefined = '';
  previewVisible = false;
  file: any;


  
  handlePreview = async (file: NzUploadFile): Promise<void> => {
    if (!file.url && !file['preview']) {
      file['preview'] = await getBase64(file.originFileObj!);
      this.previewImage = file['preview']
    }
    this.previewImage = file.url || file['preview'];
    this.previewVisible = true;

  };


  arrayBufferToBase64(buffer: any) {
    var binary = '';
    var bytes = new Uint8Array(buffer);
    var len = bytes.byteLength;
    for (var i = 0; i < len; i++) {
      binary += String.fromCharCode(bytes[i]);
    }
    return window.btoa(binary);
  }


  base64: any;

  beforeUpload: any = async (file: NzUploadFile): Promise<boolean> => {
    const buffer = await file['arrayBuffer']();
    const base64 = this.arrayBufferToBase64(buffer);
    this.imagens.push(base64); // Adiciona o arquivo ao array de base64
    return true;
}

beforeUploadMiniatura: any = async (file: NzUploadFile): Promise<boolean> => {
  const buffer = await file['arrayBuffer']();
  const base64 = this.arrayBufferToBase64(buffer);
  this.miniatura = base64 // Adiciona o arquivo ao array de base64
  return true;
}

  recebeCores(){
    this.produtoService.getCores().subscribe((res: any) => {
      this.coresDemonstracao = res.result;
      this.cores = res.result

      console.log(this.coresDemonstracao);
      console.log(this.cores);
    })
  }

  recebeArmazenamento(){
    this.produtoService.getArmazenamento().subscribe((res: any) => {
      this.armazenamento = res.result;
      this.armazenamentoDemonstracao = res.result;
      console.log(this.armazenamento);
    })
  }
}
