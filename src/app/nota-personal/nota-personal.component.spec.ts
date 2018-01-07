import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotaPersonalComponent } from './nota-personal.component';

describe('NotaPersonalComponent', () => {
  let component: NotaPersonalComponent;
  let fixture: ComponentFixture<NotaPersonalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotaPersonalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotaPersonalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
