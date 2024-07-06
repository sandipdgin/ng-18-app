import { Routes } from '@angular/router';
import { ReactiveFormComponent } from './components/reactive-form/reactive-form.component';

export const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: '/reactive-form' },
    { path: 'reactive-form', component: ReactiveFormComponent }
];
