import { Component, OnInit } from '@angular/core';
import { InventarioVehiculosUsados } from './interfaces/inventario-vehiculos-usados';
import {ThemePalette} from '@angular/material/core';
import {ProgressBarMode} from '@angular/material/progress-bar';

@Component({
  selector: 'app-inventario-vehiculos-usados',
  templateUrl: './inventario-vehiculos-usados.component.html',
  styleUrls: ['./inventario-vehiculos-usados.component.scss']
})
export class InventarioVehiculosUsadosComponent implements OnInit {

  formatLabel(value: number) {
    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }
    return value;
  }

  si = 1;
  no = 0;
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

  color: ThemePalette = 'primary';
  mode: ProgressBarMode = 'determinate';
  value = 50;
  bufferValue = 75;

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
      vida_llanta_repuesto: 0,
      marca_llanta_del_izq: '',
      marca_llanta_del_der: '',
      marca_llanta_tras_izq: '',
      marca_llanta_tras_der: '',
      marca_llanta_repuesto: '',
      observacion_llanta: '',
      rin_del_der: '' ,
      tapa_del_der: '',
      marca_rines_del_der: '',
      rin_del_izq: '' ,
      tapa_del_izq: '',
      marca_rines_del_izq: '',
      rin_tras_der: '' ,
      tapa_tras_der: '',
      marca_rines_tras_der: '',
      rin_tras_izq: '' ,
      tapa_tras_izq: '',
      marca_rines_tras_izq: '',
      observacion_rines: '',
      matricula: 0,
      soat: 0,
      rtm: 0,
      observacion_documentos: '',
      llaves:  0,
      repuesto_llaves:  0,
      manual: 0,
      encendedor: 0,
      cruceta: 0,
      trinquete_reversible: 0,
      item_llave: 0,
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
