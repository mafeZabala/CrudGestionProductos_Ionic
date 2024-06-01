import { NgModule } from '@angular/core';  // Importa el decorador NgModule desde el módulo core de Angular
import { BrowserModule } from '@angular/platform-browser';  // Importa el módulo BrowserModule para la renderización en el navegador
import { RouteReuseStrategy } from '@angular/router';  // Importa el módulo RouteReuseStrategy para la estrategia de reutilización de rutas

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';  // Importa los módulos necesarios de Ionic

import { AppComponent } from './app.component';  // Importa el componente AppComponent
import { AppRoutingModule } from './app-routing.module';  // Importa el módulo de rutas AppRoutingModule
import { FiltroPipe } from '../../filtro/filtro.pipe';  // Importa el filtro FiltroPipe
import { FormsModule } from '@angular/forms';  // Importa el módulo FormsModule para la gestión de formularios

@NgModule({  // Decorador NgModule que define un módulo de Angular
  declarations: [AppComponent, FiltroPipe],  // Declara los componentes y pipes que pertenecen a este módulo
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, FormsModule],  // Importa otros módulos necesarios
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],  // Provee servicios globales para el módulo
  bootstrap: [AppComponent],  // Componente raíz que se inicializará al arrancar la aplicación
})
export class AppModule {}  // Exporta la clase AppModule que representa el módulo

