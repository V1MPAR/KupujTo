import { AbstractControl, ValidatorFn } from "@angular/forms";

export function sameValueValidator(firstControl: AbstractControl): ValidatorFn {
  return (control: AbstractControl): {[key: string]: any} | null => {

    if (firstControl.value !== control.value) {
      return {sameValue: true};
    }

    return null;
  };
}
