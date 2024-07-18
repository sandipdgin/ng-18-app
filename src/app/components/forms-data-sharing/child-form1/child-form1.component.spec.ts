import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildForm1Component } from './child-form1.component';

describe('ChildForm1Component', () => {
  let component: ChildForm1Component;
  let fixture: ComponentFixture<ChildForm1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChildForm1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildForm1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
