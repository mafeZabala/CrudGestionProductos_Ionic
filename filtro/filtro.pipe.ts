import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtro'   // Nombre del filtro
})
export class FiltroPipe implements PipeTransform {
  transform(items: any[], filtroProducto: string, filtroUnidad: string): any[] {
    if (!items) {
      return [];  // Retorna un arreglo vacío si no hay elementos
    }

    // Convierte los filtros a minúsculas para hacer la comparación de manera insensible a mayúsculas
    const filtroProductoLower = filtroProducto ? filtroProducto.toLowerCase() : null;
    const filtroUnidadLower = filtroUnidad ? filtroUnidad.toLowerCase() : null;

    return items.filter(item => {
      // Comprueba si el producto coincide con el filtro de producto y si la unidad coincide con el filtro de unidad
      const productoMatch = filtroProductoLower ? item.descripcion.toLowerCase().includes(filtroProductoLower) : true;
      const unidadMatch = filtroUnidadLower ? item.unidad.toLowerCase().includes(filtroUnidadLower) : true;

      // Retorna verdadero si tanto el producto como la unidad coinciden con los filtros, de lo contrario, retorna falso
      return productoMatch && unidadMatch;
    });
  }
}


