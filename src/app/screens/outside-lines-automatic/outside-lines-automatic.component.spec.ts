import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutsideLinesAutomaticComponent } from './outside-lines-automatic.component';

describe('OutsideLinesAutomaticComponent', () => {
  let component: OutsideLinesAutomaticComponent;
  let fixture: ComponentFixture<OutsideLinesAutomaticComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OutsideLinesAutomaticComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OutsideLinesAutomaticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
