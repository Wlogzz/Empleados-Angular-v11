import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  constructor( private firestore: AngularFirestore ) {

   }

   agregarEmpleado(empleado: any): Promise<any> {
     return this.firestore.collection('empleados').add(empleado);
   }
   
  //Mostrar los datos de firestore a la tabla html
   getEmpleados(): Observable<any> {
     return this.firestore.collection('empleados', ref => ref.orderBy('fechaCreacion', 'asc')).snapshotChanges();
   }

   eliminarEmpleado(id: string): Promise<any> {
     return this.firestore.collection('empleados').doc(id).delete();
   }

   getEmpleado(id: string): Observable<any> {
     return this.firestore.collection('empleados').doc(id).snapshotChanges();
   }

}
