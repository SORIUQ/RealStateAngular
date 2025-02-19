import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, FormGroup, Validators} from '@angular/forms';
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
      nombre: ['', [Validators.required, Validators.minLength(3)]] ,
      apellidos: ['', [Validators.required, Validators.minLength(3)]],
      edad: ['', [Validators.required, Validators.min(17)]],
      email: ['', [Validators.required, Validators.email]],
      condiciones: [false, [Validators.requiredTrue]]

    });
  }

  onSubmit(): void {
    if (this.formularioBienvenida.valid) {

      alert("Bienvenido " + this.formularioBienvenida.value.nombre);
      this.formularioBienvenida.reset();

    }
  }
}
