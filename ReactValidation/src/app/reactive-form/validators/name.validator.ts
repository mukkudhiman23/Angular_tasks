import { AbstractControl, ValidationErrors } from "@angular/forms";

export class nameValidator {
  //for reg_no
  static minLength(control: AbstractControl): ValidationErrors | null {
    if ((control.value as number) <= 5) {
      return { minLength: true };
    }
    return null;
  }

  //for name
  static cannotContainSpace(control: AbstractControl): ValidationErrors | null {
    if ((control.value as string).indexOf(" ") >= 0) {
      return { cannotContainSpace: true };
    }
    return null;
  }
  static minimumLength(control: AbstractControl): ValidationErrors | null {
    if ((control.value as string).length <= 3) {
      return { minimumLength: true };
    }
    return null;
  }
  //for email

  static checkPattern(control: AbstractControl): ValidationErrors | null {
    let emailRegEx = /^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}/.test(
      control.value
    );
    //console.log(emailRegEx);
    if (!emailRegEx) {
      return { checkPattern: true };
    }
    return null;
  }

  //for bday

  static checkBdayDate(control: AbstractControl): ValidationErrors | null {
    let currentDate = new Date();
    let bdayDate = new Date(control.value);
    //console.log(currentDate + "--" + bdayDate);
    if (bdayDate > currentDate) {
      return { checkBdayDate: true };
    }
    return null;
  }
  //for password

  static checkPassword(control: AbstractControl): ValidationErrors | null {
    let passwordRegEx = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/.test(
      control.value
    );

    //console.log(passwordRegEx);
    if (!passwordRegEx) {
      return { checkPassword: true };
    }
    return null;
  }
}
