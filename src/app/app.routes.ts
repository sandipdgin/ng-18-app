import { Routes } from '@angular/router';
import { ReactiveFormComponent } from './components/reactive-form/reactive-form.component';
import { DynamicFormHomeComponent } from './components/dynamic-form/dynamic-form-home/dynamic-form-home.component';

export const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: '/reactive-form' },
    { path: 'reactive-form', component: ReactiveFormComponent },
    { path: 'dynamic-form', component: DynamicFormHomeComponent }
];
