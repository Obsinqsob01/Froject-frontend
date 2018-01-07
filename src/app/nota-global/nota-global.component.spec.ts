import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotaGlobalComponent } from './nota-global.component';

describe('NotaGlobalComponent', () => {
  let component: NotaGlobalComponent;
  let fixture: ComponentFixture<NotaGlobalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotaGlobalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotaGlobalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
