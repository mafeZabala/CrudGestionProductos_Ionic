import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

interface Producto {
  presupuesto: string;
  unidad: string;
  descripcion: string;
  cantidad: number;
  valorUnitario: number;
  valorTotal?: number;
  fechaAdquisicion?: string;
  proveedor?: string;
}

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  // Arreglo de productos inicializado con los datos almacenados localmente o un arreglo vacío si no hay datos
  productos: Producto[] = JSON.parse(localStorage.getItem('productos') || '[]');

  // Variables para los filtros de productos
  filtroProducto: string = '';   // Filtro por descripción del producto
  filtroUnidad: string = '';     // Filtro por unidad responsable del producto
  constructor(private alertController: AlertController) {}

  async nuevoProducto() {
    const alert = await this.alertController.create({
      header: 'Nuevo Producto',
      inputs: [
        { name: 'presupuesto', type: 'text', placeholder: 'Presupuesto' },
        { name: 'unidad', type: 'text', placeholder: 'Unidad' },
        { name: 'descripcion', type: 'text', placeholder: 'Descripción' },
        { name: 'cantidad', type: 'number', placeholder: 'Cantidad' },
        { name: 'valorUnitario', type: 'number', placeholder: 'Valor Unitario' },
        { name: 'fechaAdquisicion', type: 'date', placeholder: 'Fecha de Adquisición' },
        { name: 'proveedor', type: 'text', placeholder: 'Proveedor' },
      ],
      buttons: [
        { text: 'Cancelar', role: 'cancel' },
        {
          text: 'Agregar',
          handler: (data) => {
            if (data.presupuesto && data.unidad && data.descripcion && !isNaN(data.cantidad) && !isNaN(data.valorUnitario) && data.fechaAdquisicion && data.proveedor) {
              const producto: Producto = {
                presupuesto: data.presupuesto,
                unidad: data.unidad,
                descripcion: data.descripcion,
                cantidad: +data.cantidad,
                valorUnitario: +data.valorUnitario,
                fechaAdquisicion: data.fechaAdquisicion,
                proveedor: data.proveedor,
              };
              this.productos.push(producto);
              localStorage.setItem('productos', JSON.stringify(this.productos));
            } else {
              window.alert('Ingrese datos válidos en todos los campos.');
            }


          }
        }
      ]
    });

    await alert.present();
  }

  async editarProducto(producto: Producto) {
    const alert = await this.alertController.create({
      header: 'Editar Producto',
      inputs: [
        { name: 'presupuesto', type: 'text', value: producto.presupuesto, placeholder: 'Presupuesto' },
        { name: 'unidad', type: 'text', value: producto.unidad, placeholder: 'Unidad' },
        { name: 'descripcion', type: 'text', value: producto.descripcion, placeholder: 'Descripción' },
        { name: 'cantidad', type: 'number', value: producto.cantidad.toString(), placeholder: 'Cantidad' },
        { name: 'valorUnitario', type: 'number', value: producto.valorUnitario.toString(), placeholder: 'Valor Unitario' },
        { name: 'fechaAdquisicion', type: 'date', value: producto.fechaAdquisicion, placeholder: 'Fecha de Adquisición' },
        { name: 'proveedor', type: 'text', value: producto.proveedor, placeholder: 'Proveedor' },
      ],
      buttons: [
        { text: 'Cancelar', role: 'cancel' },
        {
          text: 'Guardar',
          handler: (data) => {
            if (data.presupuesto && data.unidad && data.descripcion && !isNaN(data.cantidad) && !isNaN(data.valorUnitario) && data.fechaAdquisicion && data.proveedor) {
              // Si los datos son válidos, asigna los valores al producto y actualiza el almacenamiento local
              producto.presupuesto = data.presupuesto;
              producto.unidad = data.unidad;
              producto.descripcion = data.descripcion;
              producto.cantidad = +data.cantidad;
              producto.valorUnitario = +data.valorUnitario;
              producto.fechaAdquisicion = data.fechaAdquisicion;
              producto.proveedor = data.proveedor;
              localStorage.setItem('productos', JSON.stringify(this.productos));
            } else {
              // Si los datos no son válidos, muestra un mensaje de alerta
              this.presentInvalidDataAlert();
            }
          }
        }
      ]
    });

    await alert.present();
  }
  presentInvalidDataAlert() {
    throw new Error('Method not implemented.');
  }

  eliminarProducto(producto: Producto) {
    const confirmacion = confirm('¿Está seguro de eliminar este producto?');
    if (confirmacion) {
      this.productos = this.productos.filter(p => p !== producto);
      localStorage.setItem('productos', JSON.stringify(this.productos));
    }
  }
}


