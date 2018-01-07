import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MiConfiguracionComponent } from './mi-configuracion.component';

describe('MiConfiguracionComponent', () => {
  let component: MiConfiguracionComponent;
  let fixture: ComponentFixture<MiConfiguracionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiConfiguracionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiConfiguracionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
