import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmpleadoService } from 'src/app/services/empleado.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-create-empleados',
  templateUrl: './create-empleados.component.html',
  styleUrls: ['./create-empleados.component.css']
})
export class CreateEmpleadosComponent implements OnInit {
  createEmpleado: FormGroup;
  submitted = false;
  loading = false; //Spinner
  id: string | null;
  titulo = 'Agregar Empleado';

  constructor(private fb: FormBuilder,
              private _empleadoService: EmpleadoService,
              private router: Router,
              private aRoute: ActivatedRoute) {
    this.createEmpleado = this.fb.group({
      nombre: [ '', Validators.required],
      apellido: [ '', Validators.required],
      documento: [ '', Validators.required],
      salario: [ '', Validators.required],
    })
    this.id = this.aRoute.snapshot.paramMap.get('id');
    console.log(this.id);
   }

  ngOnInit(): void {
    this.esEditar();
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
    this.loading = true;
    this._empleadoService.agregarEmpleado(empleado).then(() =>{
      console.log('Empleado registrado con éxito!');
      this.loading = false; //Spinner
      Swal.fire({
        icon: 'success',
        title: 'Empleado registrado con éxito!',
        showConfirmButton: true
      }).then((result) => {
        if (result.isConfirmed) {
          this.router.navigate(['/list-empleados']);
        }
      })

    }).catch(error => {
      console.log(error);
      this.loading = false;
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Error al ingresar los datos',
      })
    })
  }

  esEditar() {
    this.titulo = 'Editar Empleado';
    if(this.id !== null) {
      this._empleadoService.getEmpleado(this.id).subscribe(data => {
        console.log(data);
      })
    }
  }

}
