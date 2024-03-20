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
      const data = {
        nom: this.etudiantForm.get('nom')?.value,
        prenom: this.etudiantForm.get('prenom')?.value,
        rue: this.etudiantForm.get('rue')?.value,
        cp: this.etudiantForm.get('cp')?.value,
        ville: this.etudiantForm.get('ville')?.value,
        courriel: this.etudiantForm.get('courriel')?.value,
        genre: this.etudiantForm.get('genre')?.value,
        age: this.etudiantForm.get('age')?.value,
      };

      localStorage.setItem('NewEtudiantForm', JSON.stringify(data));
    }
  }
}
