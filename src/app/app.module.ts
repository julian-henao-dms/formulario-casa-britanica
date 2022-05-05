import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './components/home/home.component';
import { InventarioVehiculosUsadosComponent } from './components/inventario-vehiculos-usados/inventario-vehiculos-usados.component';
import { HeaderInventarioComponent } from './components/header-inventario/header-inventario.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTooltipModule } from '@angular/material/tooltip';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    InventarioVehiculosUsadosComponent,
    HeaderInventarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatCardModule,
    MatButtonModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatDividerModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatProgressBarModule,  
    MatRadioModule,
    MatSelectModule,
    MatSnackBarModule,
    MatTooltipModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
