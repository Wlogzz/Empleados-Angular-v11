import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-empleados',
  templateUrl: './create-empleados.component.html',
  styleUrls: ['./create-empleados.component.css']
})
export class CreateEmpleadosComponent implements OnInit {
  createEmpleado: FormGroup;
  submitted = false;


  constructor(private fb: FormBuilder) {
    this.createEmpleado = this.fb.group({
      nombre: [ '', Validators.required],
      apellido: [ '', Validators.required],
      documento: [ '', Validators.required],
      salario: [ '', Validators.required],
    })
   }

  ngOnInit(): void {
  }

  agregarEmpleado() {
    this.submitted = true;
    if(this.createEmpleado.invalid){
      return;
    }
    const empleado: any = {
      nombre: this.createEmpleado.value.nombre,
      apellido: this.createEmpleado.value.nombre,
      documento: this.createEmpleado.value.nombre,
      salario: this.createEmpleado.value.nombre,
      fechaCreacion: new Date(),
      fechaActualización: new Date(),
    }

    console.log(empleado);
  }

}
