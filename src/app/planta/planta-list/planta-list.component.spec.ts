/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { faker } from '@faker-js/faker';

import { PlantaListComponent } from './planta-list.component';
import { HttpClientModule } from '@angular/common/http';
import { PlantaService } from '../planta.service';
import { Planta } from '../planta';

describe('PlantaListComponent', () => {
  let component: PlantaListComponent;
  let fixture: ComponentFixture<PlantaListComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [PlantaListComponent],
      providers: [PlantaService],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlantaListComponent);
    component = fixture.componentInstance;

    for (let i = 0; i < 3; i++) {
      const planta = new Planta(
        faker.number.int(),
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        faker.number.int(),
        faker.lorem.sentence(),
        faker.lorem.sentence()
      );
      component.plantas.push(planta);
    }
    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // Comprobar que se crea la tabla
  it('should has a table', () => {
    expect(debug.query(By.css('tbody')).childNodes.length).toBeGreaterThan(0);
  });

  // Comprobar que la tabla tiene el encabezado
  it('should has a table with a thead', () => {
    const tablaElement: HTMLElement = fixture.nativeElement;
    const encabezado = tablaElement.querySelector('thead');
    expect(encabezado).toBeTruthy();
  });

  // Comprobar que la tabla tiene 3 filas
  it('should have a table with 4 tr elements (head and rows with data)', () => {
    const tablaElement: HTMLElement = fixture.nativeElement;
    const filas = tablaElement.querySelectorAll('tr');
    expect(filas.length).toBe(4);
  });
});
