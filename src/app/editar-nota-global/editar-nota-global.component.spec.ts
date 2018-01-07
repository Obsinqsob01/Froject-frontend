import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarNotaGlobalComponent } from './editar-nota-global.component';

describe('EditarNotaGlobalComponent', () => {
  let component: EditarNotaGlobalComponent;
  let fixture: ComponentFixture<EditarNotaGlobalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarNotaGlobalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarNotaGlobalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
