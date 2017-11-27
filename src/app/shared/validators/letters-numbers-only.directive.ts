import { AbstractControl, Validator, NG_VALIDATORS } from '@angular/forms';
import { Directive } from '@angular/core';

@Directive({
  selector: '[lettersNumbersOnly]',
  providers: [{provide: NG_VALIDATORS, useExisting: LettersNumbersOnlyDirective, multi: true}]
})
export class LettersNumbersOnlyDirective implements Validator {

  validate(control: AbstractControl): {[key: string]: any} {
    const isValid = new RegExp(/^[a-z0-9]+$/i, 'i').test(control.value);
    return isValid ? null : {'lettersNumbersOnly': true};
  }
}
