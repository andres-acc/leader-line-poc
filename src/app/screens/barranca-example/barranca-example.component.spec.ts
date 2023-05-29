import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarrancaExampleComponent } from './barranca-example.component';

describe('BarrancaExampleComponent', () => {
  let component: BarrancaExampleComponent;
  let fixture: ComponentFixture<BarrancaExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarrancaExampleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BarrancaExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
