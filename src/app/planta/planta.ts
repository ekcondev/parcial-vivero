export class Planta {
  id: number;
  nombre_comun: string;
  nombreCientifico: string;
  tipo: string;
  alturaMaxima: number;
  clima: string;
  sustratoSiembra: string;

  constructor(
    id: number,
    nombre_comun: string,
    nombreCientifico: string,
    tipo: string,
    alturaMaxima: number,
    clima: string,
    sustratoSiembra: string
  ) {
    this.id = id;
    this.nombre_comun = nombre_comun;
    this.nombreCientifico = nombreCientifico;
    this.tipo = tipo;
    this.alturaMaxima = alturaMaxima;
    this.clima = clima;
    this.sustratoSiembra = sustratoSiembra;
  }
}
/* archivo src/app/planta/planta.ts */
