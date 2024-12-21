import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarEditorialesComponent } from './listar-editoriales.component';

describe('ListarEditorialesComponent', () => {
  let component: ListarEditorialesComponent;
  let fixture: ComponentFixture<ListarEditorialesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListarEditorialesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListarEditorialesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
