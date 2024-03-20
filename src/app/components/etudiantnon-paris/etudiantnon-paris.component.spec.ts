import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EtudiantnonParisComponent } from './etudiantnon-paris.component';

describe('EtudiantnonParisComponent', () => {
  let component: EtudiantnonParisComponent;
  let fixture: ComponentFixture<EtudiantnonParisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EtudiantnonParisComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EtudiantnonParisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
