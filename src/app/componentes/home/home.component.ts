import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../../services/produto.service';
import { MatDialog } from '@angular/material/dialog';
import { ModalPreencherComponent } from '../modal-preencher/modal-preencher.component';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  arquivo: any;
  produtos: any; // Array para armazenar produtos
  produtosPorNCM: { [key: string]: any[] } = {}; // Agrupar produtos por NCM
  tabela: boolean = false; // Para controlar a exibição da tabela
  modalidades = ['IMPORTACAO', 'NACIONAL']; // Exemplos
  situacoes = ['ATIVADO', 'DESATIVADO']; // Exemplos

  constructor(private produtoService: ProdutoService, private dialog: MatDialog) { }

  ngOnInit() {}

  onFileChange(event: any) {
    this.arquivo = event.target.files[0]; // Armazenando o arquivo selecionado
  }

  uploadProduto() {
    if (this.arquivo) {
      const formData = new FormData();
      formData.append('file', this.arquivo);
  
      this.produtoService.uploadProduto(formData).subscribe((uploadResponse: any) => {
        if (uploadResponse) {
          setTimeout(() => {
            this.produtoService.getProdutos().subscribe((produtosResponse: any) => {
              this.produtos = produtosResponse; // Atualiza os produtos
              this.filtrarPorNCM(); // Agrupar por NCM
              this.tabela = true; 
            }, (error) => {
              console.error('Erro ao obter produtos', error);
            });
          }, 500);
        }
      }, (error) => {
        console.error('Erro no upload', error);
      });
    } else {
      console.error('Nenhum arquivo selecionado.');
    }
  }

  filtrarPorNCM() {
    this.produtosPorNCM = this.produtos.reduce((acc: any, produto: any) => {
      const ncm = produto.ncm;
      if (!acc[ncm]) {
        acc[ncm] = [];
      }
      acc[ncm].push(produto);
      return acc;
    }, {});
  }

  enviarProdutos(ncm: string) {
    const produtosAgrupados = this.produtosPorNCM[ncm].map(produto => {
      return {
        seq: produto.seq,
        denominacao: produto.denominacao,
        descricao: produto.descricao,
        cpfCnpjRaiz: produto.cpfCnpjRaiz,
        situacao: produto.situacao,
        modalidade: produto.modalidade,
        ncm: produto.ncm,
        atributos: produto.atributos.map((atributo: any) => ({
          atributo: atributo.atributo,
          valor: atributo.valor
        })),
        codigosInterno: produto.codigosInterno,
        dataReferencia: null
      };
    });
  
    this.produtoService.enviarProdutos(produtosAgrupados).subscribe((response: any) => {
      if (response.mensagens_de_erro) {
        // Cria um Set para remover mensagens duplicadas
        const mensagensUnicas = Array.from(new Set(response.mensagens_de_erro));
        Swal.fire({
          title: 'Error!',
          text: mensagensUnicas.join(', '), // Junte as mensagens únicas
          icon: 'error',
          confirmButtonText: 'Ok'
        });
      } else {
        Swal.fire({
          title: 'Success!',
          text: 'Produtos enviados com sucesso!',
          icon: 'success',
          confirmButtonText: 'Ok'
        });
      }
    }, error => {
      Swal.fire({
        title: 'Error!',
        text: 'Ocorreu um erro inesperado.',
        icon: 'error',
        confirmButtonText: 'Ok'
      });
    });
  }

abrirModal(ncm: string, produtos: any[]) {
  const dialogRef = this.dialog.open(ModalPreencherComponent, {
    data: { 
      ncm: ncm,
      cpfCnpj: produtos[0].cpfCnpjRaiz, // Passa o CPF/CNPJ do primeiro produto como referência
      atributos: produtos[0].atributos // Passa os atributos do primeiro produto
    }
  });

  dialogRef.afterClosed().subscribe(result => {
    if (result) {
      produtos.forEach(produto => {
        produto.ncm = result.ncm; // Atualiza todos com o novo NCM
        produto.cpfCnpjRaiz = result.cpfCnpj; // Atualiza todos com o novo CPF/CNPJ
        produto.atributos.forEach((atributo: any, index: number) => {
          atributo.valor = result.atributos[index].valor; // Atualiza os atributos
        });
      });
    }
  });
}

  
}
