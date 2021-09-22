import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormGroupDirective, Validators, FormControl, FormArray } from '@angular/forms';

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent implements OnInit {

  miFormulario: FormGroup = this.fb.group({
    nombre: [ '', [ Validators.required, Validators.minLength(3) ] ],
    favoritos: this.fb.array([
      new FormControl('Metal Gear', Validators.required), // Ejemplo instanciando un nuevo FormGroup
      ['Death Standing', Validators.required] // Ejemplo pasando un arreglo con los datos de creacion de un nuevo FormGroup
    ])
  })

  nuevoFavorito: FormControl = this.fb.control('', Validators.required)

  get favoritosArr() {
    return this.miFormulario.get('favoritos') as FormArray;
  }

  constructor( private fb: FormBuilder ) { }

  ngOnInit(): void {
    // this.miFormulario.reset({
    //   nombre: 'Juan'
    // })
    console.log(new FormControl('Metal Gear',Validators.required))
  }

  noEsValido( campo: string ){
    return this.miFormulario.controls[campo].invalid
            && this.miFormulario.controls[campo].touched;
  }

  agregarFavorito(){
    console.log("disparanndo agregarFavoritos")
    if (this.nuevoFavorito.invalid){
      return;
    }

    this.favoritosArr.push( this.fb.control(this.nuevoFavorito.value, [Validators.required, Validators.minLength(4)]) )
    //this.favoritosArr.push( new FormControl(this.nuevoFavorito.value, [Validators.required]) )
    this.nuevoFavorito.reset('');
    

  }

  borrar(i:number) {
    console.log("Borrando objeto", i)
    this.favoritosArr.removeAt(i)
  }

  guardar(){
    if( this.miFormulario.invalid ){
      this.miFormulario.markAllAsTouched();
      return;
    }
    console.log("Formulario enviado", this.miFormulario.value)
    // this.miFormulario.reset({
    //   nombre: ''
    // })
  }


}
