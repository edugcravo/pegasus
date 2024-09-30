import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-preencher',
  templateUrl: './modal-preencher.component.html',
  styleUrls: ['./modal-preencher.component.css']
})
export class ModalPreencherComponent {
  novoNCM: string;
  novoCpfCnpj: string;
  atributos: any[]; // Para armazenar os atributos

  constructor(
    public dialogRef: MatDialogRef<ModalPreencherComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.novoNCM = data.ncm; // Pega o NCM atual
    this.novoCpfCnpj = data.cpfCnpj; // Pega o CPF/CNPJ atual
    this.atributos = data.atributos; // Pega os atributos atuais
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  atualizar(): void {
    this.dialogRef.close({
      ncm: this.novoNCM,
      cpfCnpj: this.novoCpfCnpj,
      atributos: this.atributos // Retorna os atributos atualizados
    });
  }
}
