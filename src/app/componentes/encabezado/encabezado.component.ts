import { Component, OnInit } from '@angular/core';
import { HAMMER_LOADER } from '@angular/platform-browser';
import { PorfolioDataService } from 'src/app/servicios/porfolio-data.service';
import { __makeTemplateObject } from 'tslib';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})
export class EncabezadoComponent implements OnInit {
  datos: any;


  constructor(private datosporfolio: PorfolioDataService) { }

  ngOnInit(): void {
    this.datosporfolio.serviceprofoliook();
    this.datosporfolio.obtenerDataJson().subscribe(data => {

      this.datos = data;
      console.log(this.datos.Persona.apellido);

    });

  }

}
