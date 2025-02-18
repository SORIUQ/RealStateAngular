import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, FormGroup, EmailValidator} from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-formulario',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})

export class FormularioComponent {

  formularioBienvenida: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
  ) {

    this.formularioBienvenida = this.formBuilder.group({
      nombre: '' ,
      apellidos: '',
      edad: '',
      email:'',
      condiciones: false

    });
  }

  onSubmit(): void {
    //Comprobamos que el formulario este relleno
    if (this.formularioBienvenida.value.nombre && this.formularioBienvenida.value.apellidos && this.formularioBienvenida.value.edad && this.formularioBienvenida.value.email) {
      if (this.formularioBienvenida.value.condiciones == true) {
        if(this.formularioBienvenida.value.edad >= 17) {
          //No conseguí lo del email
          if(this.formularioBienvenida.value.email) {
            alert("Bienvenido " + this.formularioBienvenida.value.nombre)
            this.formularioBienvenida.reset();              
          } else {
            alert("El email debe tener un formato correcto")
          }
        } else {
          alert("La edad debe ser mayor o igual a 17")        
        }
      } else {
        alert("Debes aceptar las condiciones")
      }      
    } else {
      alert("Debes rellenar todos los datos")
    }
  }
}
