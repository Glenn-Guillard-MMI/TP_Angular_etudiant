import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-etudiant',
  templateUrl: './form-etudiant.component.html',
  styles: ``,
})
export class FormEtudiantComponent implements OnInit {
  etudiantForm!: FormGroup;

  constructor() {}

  ngOnInit(): void {
    this.etudiantForm = new FormGroup({
      nom: new FormControl('', Validators.required),
      prenom: new FormControl('', Validators.required),
      rue: new FormControl('', Validators.required),
      cp: new FormControl('', Validators.required),
      ville: new FormControl('', Validators.required),
      courriel: new FormControl('', Validators.required),
      genre: new FormControl('', Validators.required),
      age: new FormControl('', Validators.required),
    });
  }
  login() {
    if (this.etudiantForm.valid) {
      localStorage.setItem(
        'NewEtudiantForm',
        JSON.stringify(this.etudiantForm)
      );
    }
  }
}
