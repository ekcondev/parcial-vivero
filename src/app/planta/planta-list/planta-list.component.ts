import { Component, OnInit } from '@angular/core';
import { Planta } from '../planta';
import { PlantaService } from '../planta.service';

@Component({
  selector: 'app-planta-list',
  templateUrl: './planta-list.component.html',
  styleUrls: ['./planta-list.component.css'],
})
export class PlantaListComponent implements OnInit {
  plantas: Array<Planta> = [];
  cantidadPlantasInterior: number = 0;
  cantidadPlantasExterior: number = 0;

  constructor(private plantaService: PlantaService) {}

  getPlantas(): void {
    this.plantaService.getPlantas().subscribe((plantas) => {
      this.plantas = plantas;
      this.getTipoPlantas();
    });
  }

  getTipoPlantas(): void {
    for (let planta of this.plantas) {
      if (planta.tipo == 'Interior') {
        this.cantidadPlantasInterior++;
      } else {
        this.cantidadPlantasExterior++;
      }
    }
  }

  ngOnInit() {
    this.getPlantas();
  }
}
