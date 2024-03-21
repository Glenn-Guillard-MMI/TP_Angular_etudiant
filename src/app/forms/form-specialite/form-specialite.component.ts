import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-specialite',
  templateUrl: './form-specialite.component.html',
  styles: ``,
})
export class FormSpecialiteComponent implements OnInit {
  constructor() {}

  SpeForm!: FormGroup;

  ngOnInit(): void {
    this.SpeForm = new FormGroup({
      libelle: new FormControl(null, Validators.required),
      idSpec: new FormControl(null, Validators.required),
    });
  }

  login() {
    if (this.SpeForm.valid) {
      localStorage.setItem(
        'form-specialite',
        JSON.stringify(this.SpeForm.value)
      );
    }
  }
}
