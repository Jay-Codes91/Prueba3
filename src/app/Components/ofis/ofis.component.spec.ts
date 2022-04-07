import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfisComponent } from './ofis.component';

describe('OfisComponent', () => {
  let component: OfisComponent;
  let fixture: ComponentFixture<OfisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OfisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
