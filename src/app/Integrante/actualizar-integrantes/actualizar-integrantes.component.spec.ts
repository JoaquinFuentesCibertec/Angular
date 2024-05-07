import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarIntegrantesComponent } from './actualizar-integrantes.component';

describe('ActualizarIntegrantesComponent', () => {
  let component: ActualizarIntegrantesComponent;
  let fixture: ComponentFixture<ActualizarIntegrantesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ActualizarIntegrantesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ActualizarIntegrantesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
