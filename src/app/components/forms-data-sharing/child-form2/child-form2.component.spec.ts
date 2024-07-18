import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildForm2Component } from './child-form2.component';

describe('ChildForm2Component', () => {
  let component: ChildForm2Component;
  let fixture: ComponentFixture<ChildForm2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChildForm2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildForm2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
