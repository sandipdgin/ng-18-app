import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IssueTableComponent } from './issue-table/issue-table.component';
import { IssueInterface } from '../../common/model/issue-grid/issue.interface';
import { IssuesService } from '../../common/services/issue-grid/issues.service';

@Component({
  selector: 'app-issue-grid',
  standalone: true,
  imports: [CommonModule, RouterOutlet, IssueTableComponent],
  templateUrl: './issue-grid.component.html',
  styleUrl: './issue-grid.component.scss'
})
export class IssueGridComponent {

  isVisible = false;
  prefetchCondition = false;
  // issues!: IssueInterface[];
  // constructor(private issuesService: IssuesService){
  //   this.issuesService.getIssues().subscribe( (data) => this.issues );
  // }

  issues: IssueInterface[] = [
    {
      id: 'c9613c41-32f0-435e-aef2-b17ce758431b',
      name: 'TypeError',
      message: "Cannot read properties of undefined (reading 'length')",
      status: 'open',
      numEvents: 105,
      numUsers: 56,
      value: 1,
    },
    {
      id: '1f62d084-cc32-4c7b-943d-417c5dac896e',
      name: 'TypeError',
      message: 'U is not a function',
      status: 'resolved',
      numEvents: 45,
      numUsers: 34,
      value: 1,
    },
    {
      id: 'd4febf2b-022e-45ff-a70b-cea24234f8b5',
      name: 'TypeError',
      message: 'can\'t define property F: "obj" is not extensible',
      status: 'open',
      numEvents: 31,
      numUsers: 21,
      value: 1,
    },
    {
      id: 'ead13b50-3662-4150-99a3-0b1e4e8e4b5b',
      name: 'TypeError',
      message: 'setting getter-only property R',
      status: 'open',
      numEvents: 26,
      numUsers: 24,
      value: 1,
    },
    {
      id: 'a0ffc9a5-7105-4640-92b2-5c360db976bf',
      name: 'ReferenceError',
      message: 'C is not defined',
      status: 'open',
      numEvents: 12,
      numUsers: 11,
      value: 1,
    },
    {
      id: '01f6f953-70ad-46cf-b863-c7bfd95e5626',
      name: 'SyntaxError',
      message: 'missing name after . operator',
      status: 'resolved',
      numEvents: 15,
      numUsers: 13,
      value: 1,
    },
  ];

}
