import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmpleadoService } from 'src/app/services/empleado.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-empleados',
  templateUrl: './create-empleados.component.html',
  styleUrls: ['./create-empleados.component.css']
})
export class CreateEmpleadosComponent implements OnInit {
  createEmpleado: FormGroup;
  submitted = false;


  constructor(private fb: FormBuilder,
              private _empleadoService: EmpleadoService,
              private router: Router) {
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
      apellido: this.createEmpleado.value.apellido,
      documento: this.createEmpleado.value.documento,
      salario: this.createEmpleado.value.salario,
      fechaCreacion: new Date(),
      fechaActualización: new Date(),
    }

    this._empleadoService.agregarEmpleado(empleado).then(() =>{
      console.log('Empleado registrado con éxito!');
      Swal.fire({
        icon: 'success',
        title: 'Empleado registrado con éxito!',
        showConfirmButton: true,
      }).then((result) => {
        if (result.isConfirmed) {
          this.router.navigate(['/list-empleados']);
        }
      })

    }).catch(error => {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Error al ingresar los datos',
          })
      // console.log(error);
    })

    // console.log(empleado);
  }

}
