import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';

export interface formData {
  options?: formOptions[];
  fieldType?: string;
}

export interface formOptions {
  key:  string;
  value: string;
}

@Injectable({
  providedIn: 'root'
})
export class FormDataSharingService {

  private readonly formData: formData = {
    options: [{
      key: "select",
      value: "select"
    },
    {
      key: "deselect",
      value: "deselect"
    }
  ],
    fieldType: "dropdown"
  }

  fieldValue = new BehaviorSubject("");

  currentFieldValue = this.fieldValue.asObservable();

  updateFieldValue(value: string){
    this.fieldValue.next(value);
  }


  getFormData(): formData {
    return this.formData;
  }
}
