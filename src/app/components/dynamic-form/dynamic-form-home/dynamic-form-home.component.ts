import { Component } from '@angular/core';
import { DynamicFormComponent } from '../dynamic-form-component/dynamic-form.component';
import { AsyncPipe } from '@angular/common';
import { Observable } from 'rxjs';
import { QuestionBase } from '../../../common/model/dynamic-form/question-base';
import { QuestionService } from '../../../common/services/dynamic-form/question.service';

@Component({
  selector: 'app-dynamic-form-home',
  standalone: true,
  imports: [AsyncPipe, DynamicFormComponent],
  templateUrl: './dynamic-form-home.component.html',
  styleUrl: './dynamic-form-home.component.scss'
})
export class DynamicFormHomeComponent {

  questions$: Observable<QuestionBase<any>[]>;

  constructor(service: QuestionService) {
    this.questions$ = service.getQuestions();
  }

}
