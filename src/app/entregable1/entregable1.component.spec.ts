import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Entregable1Component } from './entregable1.component';

describe('Entregable1Component', () => {
  let component: Entregable1Component;
  let fixture: ComponentFixture<Entregable1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Entregable1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Entregable1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
