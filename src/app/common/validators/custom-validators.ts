import { ValidatorFn, AbstractControl, ValidationErrors } from "@angular/forms";
import { Observable, of, map } from "rxjs";

export class CustomValidators {
    static nameNotAllowedValidator = (name: string[]): ValidatorFn => {
        return (control: AbstractControl): ValidationErrors | null => {
          return name.includes(control.value) ? { nameNotAllowed: "Name is not allowed" } : null;
        }
      };
      
      static asyncRoleValidator = (control: AbstractControl): Observable<ValidationErrors | null> => {
        const roles = ["Admin", "Dev"];
          return of((control.value)).pipe(map( (value: string) => { 
            return roles.includes((value)) ?  null : { roleNotAllowed: "This role is not allowed" };
          }));
      };
}
