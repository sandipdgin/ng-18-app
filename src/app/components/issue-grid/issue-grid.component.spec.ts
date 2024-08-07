import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IssueGridComponent } from './issue-grid.component';

describe('IssueGridComponent', () => {
  let component: IssueGridComponent;
  let fixture: ComponentFixture<IssueGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IssueGridComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IssueGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
