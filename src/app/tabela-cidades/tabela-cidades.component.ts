import { Router } from '@angular/router';
import { CidadesService } from '../cidades.service';
import { cidade } from './../cidades';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabela-cidades',
  templateUrl: './tabela-cidades.component.html',
  styleUrl: './tabela-cidades.component.css'
})
export class TabelaCidadesComponent implements OnInit {
  cidades: cidade[] = [];

  constructor( private service: CidadesService,
               private router: Router) { }
  ngOnInit(): void {
    this.loadCidades();
  }
  loadCidades() {
    this.service.getCidades().subscribe({
      next: data => this.cidades = data
    })
  }
  delete(cidade: cidade) {
    this.service.delete(cidade).subscribe({
      next: () => this.loadCidades()
    })
    }

  create() {
    this.router.navigate(['cidades'])
  }

}
