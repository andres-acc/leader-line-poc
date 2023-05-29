import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarrancaNodeComponent } from './barranca-node.component';

describe('BarrancaNodeComponent', () => {
  let component: BarrancaNodeComponent;
  let fixture: ComponentFixture<BarrancaNodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarrancaNodeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BarrancaNodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
