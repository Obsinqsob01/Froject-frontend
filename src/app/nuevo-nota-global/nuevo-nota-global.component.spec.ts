import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoNotaGlobalComponent } from './nuevo-nota-global.component';

describe('NuevoNotaGlobalComponent', () => {
  let component: NuevoNotaGlobalComponent;
  let fixture: ComponentFixture<NuevoNotaGlobalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NuevoNotaGlobalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevoNotaGlobalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
