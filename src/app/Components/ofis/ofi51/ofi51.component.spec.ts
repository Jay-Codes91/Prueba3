import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ofi51Component } from './ofi51.component';

describe('Ofi51Component', () => {
  let component: Ofi51Component;
  let fixture: ComponentFixture<Ofi51Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ofi51Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Ofi51Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
