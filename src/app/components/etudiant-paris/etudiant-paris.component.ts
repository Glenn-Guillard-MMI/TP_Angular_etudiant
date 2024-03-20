import { Component, OnInit } from '@angular/core';
import { EtudiantServiceService } from '../../service/etudiant-service.service';

@Component({
  selector: 'app-etudiant-paris',
  templateUrl: './etudiant-paris.component.html',
  styleUrl: './etudiant-paris.component.css',
})
export class EtudiantParisComponent implements OnInit {
  constructor(private etudiant: EtudiantServiceService) {}

  data: any[] = [];

  ngOnInit(): void {
    this.data = this.etudiant.getEtudiant();
  }
}
