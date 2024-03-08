import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
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
