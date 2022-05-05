import { Component, OnInit } from '@angular/core';
import { InventarioVehiculosUsados } from './interfaces/inventario-vehiculos-usados';

@Component({
  selector: 'app-inventario-vehiculos-usados',
  templateUrl: './inventario-vehiculos-usados.component.html',
  styleUrls: ['./inventario-vehiculos-usados.component.scss']
})
export class InventarioVehiculosUsadosComponent implements OnInit {

  SI = 1;
  NO = 0;
  public data: InventarioVehiculosUsados;

  constructor() { 
    this.data = {
      fecha: new Date,
      hora: new Date,
    }
  }

  ngOnInit(): void {
  }

  onSubmit(data: InventarioVehiculosUsados){
    console.log(this.data);

  }


}
