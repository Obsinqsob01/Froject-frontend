import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoNotaPersonalComponent } from './nuevo-nota-personal.component';

describe('NuevoNotaPersonalComponent', () => {
  let component: NuevoNotaPersonalComponent;
  let fixture: ComponentFixture<NuevoNotaPersonalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NuevoNotaPersonalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevoNotaPersonalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
