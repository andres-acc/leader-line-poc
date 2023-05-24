import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WmLeaderLineComponent } from './wm-leader-line.component';

describe('WmLeaderLineComponent', () => {
  let component: WmLeaderLineComponent;
  let fixture: ComponentFixture<WmLeaderLineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WmLeaderLineComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WmLeaderLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
