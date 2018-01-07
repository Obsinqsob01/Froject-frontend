import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarNotaPersonalComponent } from './editar-nota-personal.component';

describe('EditarNotaPersonalComponent', () => {
  let component: EditarNotaPersonalComponent;
  let fixture: ComponentFixture<EditarNotaPersonalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarNotaPersonalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarNotaPersonalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
