import { AbstractControl, ValidationErrors } from '@angular/forms';

const WEIGHTS: number[] = [6, 5, 7, 2, 3, 4, 5, 6, 7];
const MODULE_VALUES: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

const checkPassword: (pass: string) => boolean = (pass: string): boolean => {
  let count = 0;

  if (8 <= pass.length) {
    if (pass.match(".*\\d.*"))
      count++;
    if (pass.match(".*[a-z].*"))
      count++;
    if (pass.match(".*[A-Z].*"))
      count++;
    if (pass.match(".*[!#$%&].*"))
      count++;
  }

  return count === 4;
};

export const passwordValidator: (control: AbstractControl) => ValidationErrors | null = (control: AbstractControl): ValidationErrors | null => {
  if (!control.value || control.value.length === 0) {
    return null;
  }
  const isPasswordValid: boolean = checkPassword(`${control.value}`);

  return !isPasswordValid ? { password: control.value } : null;
};
