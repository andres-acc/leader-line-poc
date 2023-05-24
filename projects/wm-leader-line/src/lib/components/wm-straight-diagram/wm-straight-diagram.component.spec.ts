import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StraightDiagramComponent } from './wm-straight-diagram.component';

describe('StraightDiagramComponent', () => {
  let component: StraightDiagramComponent;
  let fixture: ComponentFixture<StraightDiagramComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StraightDiagramComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StraightDiagramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
