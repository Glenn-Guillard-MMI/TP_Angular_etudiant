import { Component, OnInit } from '@angular/core';
import { EtudiantServiceService } from '../../service/etudiant-service.service';

@Component({
  selector: 'app-etudiantnon-paris',
  templateUrl: './etudiantnon-paris.component.html',
  styleUrl: './etudiantnon-paris.component.css',
})
export class EtudiantnonParisComponent implements OnInit {
  constructor(private etudiant: EtudiantServiceService) {}

  data: any[] = [];

  ngOnInit(): void {
    this.data = this.etudiant.getEtudiant();
  }
}
