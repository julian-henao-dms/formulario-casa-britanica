import { Component, OnInit } from '@angular/core';
import { InventarioVehiculosUsados } from './interfaces/inventario-vehiculos-usados';

@Component({
  selector: 'app-inventario-vehiculos-usados',
  templateUrl: './inventario-vehiculos-usados.component.html',
  styleUrls: ['./inventario-vehiculos-usados.component.scss']
})
export class InventarioVehiculosUsadosComponent implements OnInit {

  gasolina = 1;
  diesel = 0;
  automatica = 1;
  mecanica = 0;
  t4x2 = 0;
  t4x4 = 1;
  tela = 0;
  cuero = 1;
  nb = 0;
  hb = 1;
  qp = 2;

  public data: InventarioVehiculosUsados;

  constructor() { 
    this.data = {
      consignacion: '',
      retoma: '',
      otros: '',
      placa: '',
      interno: '',
      asesor: '',
      sala: '',
      fecha: new Date,
      hora: new Date,
      marca: '',
      referencia: '',
      modelo: '',
      combustible: 0,
      kilometraje: 0,
      transmision: 0,
      color: '',
      cilindraje: 0 ,
      traccion: '',
      cojineria: '',
      linea: '',
      codigo_estado: '',
      vida_llanta_del_izq: 0,
      vida_llanta_del_der: 0,
      vida_llanta_tras_izq: 0,
      vida_llanta_tras_der: 0,
      marca_llanta_del_izq: '',
      marca_llanta_del_der: '',
      marca_llanta_tras_izq: '',
      marca_llanta_tras_der: '',
      observacion_llanta: '',
      rin: '' ,
      tapa: '',
      marca_rines_tapa: '',
      observacion_rines: '',
      matricula: 0,
      soat: 0,
      rtm: 0,
      observaciones_documentos: '',
      llaves:  0,
      repuesto_llaves:  0,
      manual: 0,
      encendedor: 0,
      cruceta: 0,
      item_llave: 0,
      trinquete_reversible: 0,
      gato: 0,
      kit_herramientas: 0,
      antena: 0,
      cubre_maletero: 0,
      nivel_gasolina: 0,
      marca_bateria: '',
      ref_bateria: '',
      marca_radio: '',
      ref_radio: '',
      observaciones: '',
      nombre_entrega_vehiculo: '',
      fecha_hora_entrega: new Date,
      firma_entrega: '',
      empleado_recibe: '',
      nombre_recoge_vehiculo: '',
      fecha_hora_recogida: new Date,
      firma_recoge: '',
      empleado_entrega: '',
    }
  }

  ngOnInit(): void {
  }

  onSubmit(data: InventarioVehiculosUsados){
    console.log(this.data);

  }


}
