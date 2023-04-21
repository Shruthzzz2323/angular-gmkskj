import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentChildDropdownComponent } from './parent-child-dropdown.component';

describe('ParentChildDropdownComponent', () => {
  let component: ParentChildDropdownComponent;
  let fixture: ComponentFixture<ParentChildDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParentChildDropdownComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParentChildDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
