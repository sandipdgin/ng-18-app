import { Component } from '@angular/core';
import { ChildForm1Component } from '../child-form1/child-form1.component';
import { ChildForm2Component } from '../child-form2/child-form2.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-parent-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, ChildForm1Component, ChildForm2Component],
  templateUrl: './parent-form.component.html',
  styleUrl: './parent-form.component.scss'
})
export class ParentFormComponent {

}
