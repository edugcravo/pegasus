import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rodape',
  templateUrl: './rodape.component.html',
  styleUrls: ['./rodape.component.css']
})
export class RodapeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  redirecionarParaWhatsapp() {
    // Número de telefone do WhatsApp (substitua pelo seu número)
    const numeroWhatsapp = '5541998846963';
    // Mensagem pré-pronta
    const mensagem = 'Olá, gostaria de saber mais sobre os serviços da empresa';
  
    // Cria o link para o WhatsApp com o número e a mensagem
    const url = `https://wa.me/${numeroWhatsapp}?text=${encodeURIComponent(mensagem)}`;
  
    // Redireciona para o WhatsApp
    window.open(url, '_blank');
  }

  redirecionarParaInsta(){
    const url = 'https://www.instagram.com/i.pegasusimport'
    window.open(url, '_blank');
  }

  redirecionarParaFace(){
    const url = 'https://www.facebook.com/share/3BAiF5BHMuwqKVCA/?mibextid=qi2Omg'
    window.open(url, '_blank');
  }
}
