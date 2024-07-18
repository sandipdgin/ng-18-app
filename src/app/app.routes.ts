import { Routes } from '@angular/router';
import { ReactiveFormComponent } from './components/reactive-form/reactive-form.component';
import { DynamicFormHomeComponent } from './components/dynamic-form/dynamic-form-home/dynamic-form-home.component';
import { IssueGridComponent } from './components/issue-grid/issue-grid.component';
import { ParentFormComponent } from './components/forms-data-sharing/parent-form/parent-form.component';

export const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: '/reactive-form' },
    { path: 'reactive-form', component: ReactiveFormComponent },
    { path: 'dynamic-form', component: DynamicFormHomeComponent },
    { path: 'issue-grid', component: IssueGridComponent },
    { path: 'forms-data-sharing', component: ParentFormComponent }
    
];
