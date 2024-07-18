import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormDataSharingService } from '../services/form-data-sharing.service';

@Component({
  selector: 'app-child-form2',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule,],
  templateUrl: './child-form2.component.html',
  styleUrl: './child-form2.component.scss'
})
export class ChildForm2Component {

  fb = inject(NonNullableFormBuilder);
  
  child2Form = this.fb.group({
    firstName: this.fb.control('', { validators: [Validators.required] })
  });

  fieldValue!: string;

  constructor(private formDataSharingService: FormDataSharingService) {
     this.formDataSharingService.currentFieldValue.subscribe( (data) => {
      this.fieldValue = data;

      if(this.fieldValue == "select"){
        console.log("form select")
        this.child2Form.controls.firstName.markAsDirty();
      }

      if(this.fieldValue == "deselect"){
        console.log("form deselect")
        this.child2Form.reset();
      }

     })
  }

  onSubmit(): void {
    console.log(this.child2Form.value)
  }

}
