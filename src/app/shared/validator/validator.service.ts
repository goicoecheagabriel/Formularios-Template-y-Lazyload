import { Injectable } from '@angular/core';
import { AbstractControl, FormControl, ValidationErrors } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidatorService {

public nombreApellidoPattern: string = '([a-zA-Zñ]+) ([a-zA-Zñ]+)';
public emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";



  constructor() { }

  public noPuedeSerStrider ( control:FormControl ): ValidationErrors | null {
    const valor: string = control.value?.trim().toLowerCase();
    
    if (valor === "strider") {
      return {invalid:"La palabra strider está prohibida"}
    }
      return null
  }

  public camposIguales( campo1: string, campo2: string ) {

    return ( formGroup: AbstractControl ): ValidationErrors | null =>{
      const pass1 = formGroup.get(campo1)?.value;
      const pass2 = formGroup.get(campo2)?.value;

      if( pass1 !== pass2 ){
        
        formGroup.get(campo2)?.setErrors({invalid: 'La confirmación no coincide con el password'})
        return {invalid: 'La confirmación no coincide con el password'}
      }
      

      formGroup.get(campo2)?.setErrors(null)
      return null;
    }

  }
}
