import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LettersNumbersOnlyDirective } from './validators/letters-numbers-only.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [LettersNumbersOnlyDirective],
  exports:  [LettersNumbersOnlyDirective]
})
export class SharedModule { }
