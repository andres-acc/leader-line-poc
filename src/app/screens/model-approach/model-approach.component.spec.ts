import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelApproachComponent } from './model-approach.component';

describe('ModelApproachComponent', () => {
  let component: ModelApproachComponent;
  let fixture: ComponentFixture<ModelApproachComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModelApproachComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModelApproachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
