import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu-superior',
  templateUrl: './menu-superior.component.html',
  styleUrls: ['./menu-superior.component.css']
})
export class MenuSuperiorComponent implements OnInit {

  items: MenuItem[] | undefined;


  constructor(private router: Router) { }

  ngOnInit() {

    
  }

  redirecionaCategoria(categoria: any){
    localStorage.setItem('categoria', categoria);
    this.router.navigate(['/categorias']);
  }
  
}
