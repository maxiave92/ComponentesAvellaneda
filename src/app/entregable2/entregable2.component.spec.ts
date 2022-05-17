import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Entregable2Component } from './entregable2.component';

describe('Entregable2Component', () => {
  let component: Entregable2Component;
  let fixture: ComponentFixture<Entregable2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Entregable2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Entregable2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
