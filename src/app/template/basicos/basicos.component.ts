import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit {

  @ViewChild('miFormulario') miFormulario!: NgForm;

  initForm = {
    producto: 'RTXi 4500',
    precio: 0,
    existencias: 0
  }
  constructor() { 
  }

  ngOnInit(): void {
    setTimeout(() => {
      //this.miFormulario.resetForm()
    }, 500);
  }

  nombreValido(): boolean {
    return this.miFormulario?.controls.producto?.invalid && this.miFormulario?.controls.producto?.touched;
  }

  precioValido(): boolean {
    let valorActual: number = this.miFormulario?.controls.precio?.value;
    
    if(this.miFormulario?.controls.precio?.touched && (valorActual !<0 || valorActual == null)){
      this.miFormulario?.controls?.precio?.setErrors({Precio: true})
    }
    
      return this.miFormulario?.controls.precio?.touched
              && (valorActual !<0 || valorActual == null);
    
  }

  guardar(  ) {
    //event.preventDefault();
    console.log("Posteo correcto")
    this.miFormulario.resetForm( this.initForm )

  }

}
