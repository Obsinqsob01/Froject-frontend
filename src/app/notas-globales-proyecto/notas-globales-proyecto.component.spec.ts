import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotasGlobalesProyectoComponent } from './notas-globales-proyecto.component';

describe('NotasGlobalesProyectoComponent', () => {
  let component: NotasGlobalesProyectoComponent;
  let fixture: ComponentFixture<NotasGlobalesProyectoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotasGlobalesProyectoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotasGlobalesProyectoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
