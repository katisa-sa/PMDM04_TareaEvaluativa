import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

import { CarruselPageRoutingModule } from './carrusel-routing.module';
import { CarruselPage } from './carrusel.page';
import { MisComponentesModule } from '../../components/mis-componentes.module';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CarruselPageRoutingModule,
    MisComponentesModule,
  ],
  declarations: [
    CarruselPage
  ]

})
export class CarruselPageModule {}
