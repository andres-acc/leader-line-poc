import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibraryImplementationComponent } from './library-implementation.component';

describe('LibraryImplementationComponent', () => {
  let component: LibraryImplementationComponent;
  let fixture: ComponentFixture<LibraryImplementationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LibraryImplementationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LibraryImplementationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
