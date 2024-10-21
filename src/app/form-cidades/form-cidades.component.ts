import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CidadesService } from '../cidades.service';

@Component({
  selector: 'app-form-cidades',
  templateUrl: './form-cidades.component.html',
  styleUrl: './form-cidades.component.css'
})
export class FormCidadesComponent implements OnInit {

  formGroupCidade: Form;
  isEditing = false;

  constructor(private router: Router,
              private activeRouter: ActivatedRoute,
              private service: CidadesService) {
    this.formGroupCidade = FormBuilder.group({
      id:        [''],
      nome:      [''],
      estado:    [''],
      uf:        [''],
      populacao: [''],
      regiao:    ['']
    })
               }


  ngOnInit(): void { }

update() {
throw new Error('Method not implemented.');
}

save() {
  throw new Error('Method not implemented.');
  }
}
