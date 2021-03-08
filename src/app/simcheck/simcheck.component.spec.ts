import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimcheckComponent } from './simcheck.component';

describe('SimcheckComponent', () => {
  let component: SimcheckComponent;
  let fixture: ComponentFixture<SimcheckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimcheckComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimcheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
