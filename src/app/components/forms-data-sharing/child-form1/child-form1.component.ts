import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormGroup, NonNullableFormBuilder, ReactiveFormsModule } from '@angular/forms';
import { FormDataSharingService, formData } from '../services/form-data-sharing.service';

@Component({
  selector: 'app-child-form1',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './child-form1.component.html',
  styleUrl: './child-form1.component.scss'
})
export class ChildForm1Component {

  fb = inject(NonNullableFormBuilder);

  formData!: formData;

  constructor(private formDataSharingService: FormDataSharingService) {
    this.formData = this.formDataSharingService.getFormData();
  }
  
  child1Form = this.fb.group({
    selectStatus: this.fb.control('')
  });

  onSubmit(): void {
    console.log(this.child1Form.value)
  }

  selectedOption() {
    console.log("selectStatus = ", this.child1Form.get('selectStatus')?.value)
    let value: string = this.child1Form.get('selectStatus')!.value;
    this.formDataSharingService.updateFieldValue(value);
  }
}

