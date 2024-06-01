import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';  // Importa el esquema CUSTOM_ELEMENTS_SCHEMA
import { TestBed } from '@angular/core/testing';  // Importa la utilidad de pruebas de Angular

import { AppComponent } from './app.component';  // Importa el componente que se va a probar

describe('AppComponent', () => {  // Describe el conjunto de pruebas para el componente AppComponent

  beforeEach(async () => {  // Configura el entorno de pruebas antes de cada prueba
    await TestBed.configureTestingModule({  // Configura el módulo de pruebas con los componentes y esquemas necesarios
      declarations: [AppComponent],  // Declara el componente AppComponent a probar
      schemas: [CUSTOM_ELEMENTS_SCHEMA],  // Utiliza el esquema CUSTOM_ELEMENTS_SCHEMA para el componente
    }).compileComponents();  // Compila los componentes
  });

  it('should create the app', () => {  // Define una prueba para verificar si el componente se crea correctamente
    const fixture = TestBed.createComponent(AppComponent);  // Crea una instancia del componente bajo prueba
    const app = fixture.componentInstance;  // Obtiene la instancia del componente
    expect(app).toBeTruthy();  // Verifica si el componente se ha creado correctamente
  });

});

