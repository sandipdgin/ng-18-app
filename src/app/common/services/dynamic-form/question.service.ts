import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { QuestionBase } from '../../model/dynamic-form/question-base';
import { DropdownQuestion } from '../../model/dynamic-form/question-dropdown';
import { TextboxQuestion } from '../../model/dynamic-form/question-textbox';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor() { }

  // TODO: get from a remote source of question metadata
  getQuestions() {
    const questions: QuestionBase<string>[] = [
      new DropdownQuestion({
        key: 'applicationFor',
        label: 'Application For',
        options: [
          {key: 'softwareEngineer', value: 'Software Engineer'},
          {key: 'softwareTester', value: 'Software Tester'},
          {key: 'admin', value: 'Admin'},
          {key: 'accountant', value: 'Accountant'},
        ],
        order: 3,
      }),

      new TextboxQuestion({
        key: 'firstName',
        label: 'First name',
        value: 'Alex',
        required: true,
        order: 1,
      }),

      new TextboxQuestion({
        key: 'emailAddress',
        label: 'Email',
        type: 'email',
        order: 2,
      }),
    ];

    console.log("getQuestions mock data ", questions);
    return of(questions.sort((a, b) => a.order - b.order));
  }

}
