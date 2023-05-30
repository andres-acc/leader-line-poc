import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SubgroupsDiagramComponent } from './wm-subgroups-diagram.component';

describe('StraightDiagramComponent', () => {
  let component: SubgroupsDiagramComponent;
  let fixture: ComponentFixture<SubgroupsDiagramComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubgroupsDiagramComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubgroupsDiagramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
