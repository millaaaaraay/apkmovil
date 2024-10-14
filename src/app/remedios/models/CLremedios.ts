export class Clremedios {
    // si no Inicializo los valores, da Error
    // Por eso es el constructor por obligación
    id: number;
    nombre: string;
    descripcion: string;
    dosis: string;
    // si no Inicializo los valores, da Error
      constructor(obj: any){
          this.id = obj && obj.id || null
          this.nombre = obj && obj.nombre || null
          this.descripcion = obj && obj.descripcion || null
          this.dosis= obj && obj.dosis || null
      }
  }
  