import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit {

/*   miFormulario: FormGroup = new FormGroup({
    'nombre'     : new FormControl('RTX 4080ti'),
    'precio'     : new FormControl(1500),
    'existencias': new FormControl(5),
  }) */

  miFormulario: FormGroup = this.fb.group({
    nombre: [ null, [Validators.required, Validators.minLength(3)] ],
    precio: [ null, [Validators.required, Validators.min(0)] ],
    existencias: [ null, [Validators.required, Validators.min(0)] ],
  })

  constructor( private fb: FormBuilder ) { }

  ngOnInit(): void {
    this.miFormulario.reset({
      nombre: 'RTX 4080ti',
      precio: 1600,
      existencias: 10
    })
  }

  campoNoEsValido(campo:string){
    return this.miFormulario.controls[campo].errors 
            && this.miFormulario.controls[campo].touched
  }

  guardar(){
    if( this.miFormulario.invalid ){
      this.miFormulario.markAllAsTouched();
      return
    }
    console.log(this.miFormulario.value);
    this.miFormulario.reset({
      nombre: 'rtx 4080ti',
      precio: 1800
    });
  }

}
