import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective } from '@angular/forms';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
// ES6 Modules or TypeScript
import Swal from 'sweetalert2';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {

  hide = true;

  formRegister!: FormGroup;

  constructor(
    private formBuilder:FormBuilder,
    private router:Router,
  )
  
  {}

  
  // | dando validaciones
  ngOnInit(): void {
      

    this.formRegister = this.formBuilder.group({
      'name': new FormControl ("", [Validators.required, Validators.minLength(3), Validators.maxLength(25)]),
      'apellido': new FormControl ("", [Validators.required,Validators.pattern('')]), 
      'email': new FormControl ("", [Validators.required, Validators.email]),
      'website': new FormControl ("", [Validators.required, Validators.pattern('^((https?|ftp|smtp):\/\/)?(www.)?[a-z0-9]+\.[a-z]+(\/[a-zA-Z0-9#]+\/?)*$')]),
    });

  }
  //dando validaciones |


// | Mensajes de errores de validación

  getErrorName () {
    if (this.formRegister.controls['name'].hasError('required')) {
      return 'The name is required';
    } else if (this.formRegister.controls['name'].hasError('minlength')) {
      return 'It needs to be at least 3 characters'
    } 

    return 'It can have a maximum of 25 characters';

  }

  getErrorApellido () {
    if (this.formRegister.controls['apellido'].hasError('required')) {
      return 'The last names are required';
    }

    return this.formRegister.controls['apellido'].hasError('pattern') ? 'You must put your two last names' : '';
  
  }


  getErrorMessage() {
    if (this.formRegister.controls['email'].hasError('required')) {
      return 'The email is required';
    }

    return this.formRegister.controls['email'].hasError('email') ? 'It needs to be a valid email' : '';
  
  }

  getErrorWebsite(){

    if (this.formRegister.controls['website'].hasError('required')){
      return 'The website is required';
    }

    return this.formRegister.controls['website'].hasError('pattern') ? 'Invalid url' : '';
  }

  //Mensajes de erores de validación |



  onSubmit(){
  

    //alert registro exitoso
    Swal.fire({
      title: 'Genial!',
      text: 'Registro exitoso.',
      imageUrl: 'https://media.tenor.com/KgTaOloE588AAAAC/anime-like.gif',
      imageWidth: 400,
      imageHeight: 200,
      imageAlt: 'imagen',
    });

    
    
  }


}
