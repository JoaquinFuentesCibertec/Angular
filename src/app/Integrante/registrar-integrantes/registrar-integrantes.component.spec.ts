import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarIntegrantesComponent } from './registrar-integrantes.component';

describe('RegistrarIntegrantesComponent', () => {
  let component: RegistrarIntegrantesComponent;
  let fixture: ComponentFixture<RegistrarIntegrantesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegistrarIntegrantesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegistrarIntegrantesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
