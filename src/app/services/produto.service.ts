import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  constructor(private http: HttpClient) { }

  headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Accept-Encoding': 'gzip',
  });

  url = environment.apiUrl;

  uploadProduto(formData: FormData) {
    return this.http.post(this.url + 'produto/carregar-produtos/', formData);
  }

  getProdutos(){
    return this.http.get(this.url + 'produto/retornar-produtos/', { headers: this.headers });
  }


  enviarProdutos(produtosAgrupados: any) {
    console.log(produtosAgrupados); // Para verificar o que está sendo enviado
    return this.http.post(this.url + 'produto/enviar-produtos/', produtosAgrupados, { headers: this.headers });
}
}
