import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotasGlobalesComponent } from './notas-globales.component';

describe('NotasGlobalesComponent', () => {
  let component: NotasGlobalesComponent;
  let fixture: ComponentFixture<NotasGlobalesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotasGlobalesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotasGlobalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
