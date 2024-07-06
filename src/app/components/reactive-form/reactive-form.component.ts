import { Component, inject } from '@angular/core';
import { CustomValidators } from '../../common/validators/custom-validators';
import { NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ValidateRangNosDirective } from '../../common/directive/validate-rang-nos.directive';

@Component({
  selector: 'app-reactive-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, ValidateRangNosDirective],
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.scss'
})
export class ReactiveFormComponent {

  fb = inject(NonNullableFormBuilder);
  
  form = this.fb.group({
    firstName: this.fb.control('', { validators: [Validators.required, Validators.minLength(3), CustomValidators.nameNotAllowedValidator(["Wrong"])] }),
    role: this.fb.control('', { asyncValidators: [CustomValidators.asyncRoleValidator]}),
    age: this.fb.control('')
  });

  onSubmit(){
    console.log(this.form.getRawValue())
  }

}
