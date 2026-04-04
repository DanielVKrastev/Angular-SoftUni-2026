import { Directive, Input } from '@angular/core';
import { AbstractControl, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[appMaxCount]',
  standalone: true,
})
export class MaxCountDirective implements Validator{
  @Input() appMaxCount: number | undefined;

  validate(control: AbstractControl): ValidationErrors | null {
    const len = control.value?.length || 0;
    console.log({control});
    console.log( {appMaxCount: this.appMaxCount});
    
    if(!this.appMaxCount || len <= this.appMaxCount){
      return null;
    }

    return {appMaxCount: this.appMaxCount};
  }
}
