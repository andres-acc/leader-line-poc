import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutsideLinesComponent } from './outside-lines.component';

describe('OutsideLinesComponent', () => {
  let component: OutsideLinesComponent;
  let fixture: ComponentFixture<OutsideLinesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OutsideLinesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OutsideLinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
