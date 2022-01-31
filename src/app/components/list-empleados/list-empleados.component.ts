import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { EmpleadoService } from 'src/app/services/empleado.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-empleados',
  templateUrl: './list-empleados.component.html',
  styleUrls: ['./list-empleados.component.css']
})
export class ListEmpleadosComponent implements OnInit {
  empleados: any[] = [ ];
  loading = false; //Spinner

  constructor(private _empleadoService: EmpleadoService) {
   }

  ngOnInit(): void {
    this.getEmpleados();
  }

  getEmpleados() {
    this._empleadoService.getEmpleados().subscribe(data =>{
      this.empleados = [];
      data.forEach((element:any) => {
        // console.log(element.payload.doc.id);
        // console.log(element.payload.doc.data);
        this.empleados.push({
          id: element.payload.doc.id,
          ...element.payload.doc.data()
        })
      });
      // console.log(this.empleados);
    });
  }

  eliminarEmpleado(id: string) {
    this.loading = true;
    this._empleadoService.eliminarEmpleado(id).then(() =>{
      console.log('Empleado eliminado con éxito');
      this.loading = false;
      Swal.fire({
        icon: 'success',
        title: 'Empleado eliminado con éxito!',
        showConfirmButton: true
      })
    }).catch(error => {
      console.log(error);
    })
  }

}
