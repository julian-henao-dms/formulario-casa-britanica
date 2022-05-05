import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventarioVehiculosUsadosComponent } from './inventario-vehiculos-usados.component';

describe('InventarioVehiculosUsadosComponent', () => {
  let component: InventarioVehiculosUsadosComponent;
  let fixture: ComponentFixture<InventarioVehiculosUsadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InventarioVehiculosUsadosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InventarioVehiculosUsadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
