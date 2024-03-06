import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

constructor(private http: HttpClient) { }

headers = new HttpHeaders({
  'Content-Type': 'application/json',
  'Accept-Enconding': 'gzip',
  // Authorization: 'Bearer ' + localStorage.getItem('token')
});

url = environment.apiUrl;

cadastrarProduto(dados: any){
  console.log(dados)
  return this.http.post(this.url + '/produto/cadastrar', dados, {headers: this.headers});
}

getProdutos(){
  return this.http.get(this.url + '/produto/listar', {headers: this.headers});
}

getProdutoId(id: any){
  return this.http.get(this.url + '/produto/lista-id/' + id, {headers: this.headers});
}

getCores(){
  return this.http.get(this.url + '/cores/listar', {headers: this.headers});
}

getArmazenamento(){
  return this.http.get(this.url + '/armazenamento/listar', {headers: this.headers});
}

}
