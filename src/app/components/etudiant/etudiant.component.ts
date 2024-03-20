import { Component, OnInit } from '@angular/core';
import { EtudiantServiceService } from '../../service/etudiant-service.service';
import { Etudiant } from '../../models/etudiant';

@Component({
  selector: 'app-etudiant',
  templateUrl: './etudiant.component.html',
  styleUrl: './etudiant.component.css',
})
export class EtudiantComponent implements OnInit {
  constructor(private etudiant: EtudiantServiceService) {}

  data: any[] = [];

  ngOnInit(): void {
    this.data = this.etudiant.getEtudiant();
  }
}
