import { Component, OnInit } from '@angular/core';
import { Specialite } from '../../models/specialite';
import { SpecServiceService } from '../../service/spec-service.service';

@Component({
  selector: 'app-specialite',
  templateUrl: './specialite.component.html',
  styleUrl: './specialite.component.css',
})
export class SpecialiteComponent implements OnInit {
  constructor(private spe: SpecServiceService) {}

  data: any[] = [];

  ngOnInit(): void {
    this.data = this.spe.getSpe();
  }
}
