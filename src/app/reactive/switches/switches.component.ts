import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {tap} from 'rxjs/operators'
import Swal from 'sweetalert2'

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styles: [
  ]
})
export class SwitchesComponent implements OnInit {

  miFormulario: FormGroup = this.fb.group({
    genero: [ 'M', Validators.required ],
    notificaciones: [ true, Validators.required ],
    condiciones: [false, Validators.requiredTrue]
  })


  persona = {
    genero: 'M',
    notificaciones: true,
  }

  constructor( private fb: FormBuilder ) { }

  ngOnInit(): void {
    this.miFormulario.reset({
      ...this.persona,
      condiciones: true
    })


    // Esta estrategia tiene el siguiente flujo
    // A medida que se modifica el formulario se actualiza la persona
    this.miFormulario.valueChanges.subscribe( ({condiciones, ...restoDeArgumentos}) => {
      //delete formData.condiciones;
      this.persona = restoDeArgumentos;
    } )

  }

  // Esta estrategia tiene el siguiente flujo
  // Se llena el formulario y cuando se da al boton de guardar si se valida se actualiza la persona
  guardar(){
    
    if( this.miFormulario.invalid ){
      
      this.miFormulario.markAllAsTouched;
      
      Swal.fire({
        icon: 'error',
        title:"Condiciones",
        text:"Debe aceptar las condiciones de uso",
        timer: 4000
      });

      return;
    }

    const personaActualizada = {
      ... this.miFormulario.value
    }

    delete personaActualizada.condiciones;
    this.persona = personaActualizada;
  
    Swal.fire({
      icon: 'success',
      title:"Enviardo",
      text:"La persona ha sido actualizada satisfactoriamente",
      timer: 4000
    });

  }


 

}
