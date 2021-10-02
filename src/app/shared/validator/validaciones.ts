import { FormControl } from "@angular/forms";

export const nombreApellidoPattern: string = '([a-zA-Zñ]+) ([a-zA-Zñ]+)';
export const emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

export const noPuedeSerStrider = ( control:FormControl ) => {
    const valor: string = control.value?.trim().toLowerCase();
    
    if (valor === "strider") {
      return {invalid:"La palabra strider está prohibida"}
    }
      return null
  }