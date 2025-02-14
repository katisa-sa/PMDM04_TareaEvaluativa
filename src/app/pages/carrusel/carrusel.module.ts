
import { MisComponentesModule } from './../../components/mis-componentes.module';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { CarruselPageRoutingModule } from './carrusel-routing.module';
import { CarruselPage } from './carrusel.page';

// import Swiper JS
import Swiper from 'swiper';
// import Swiper styles
import 'swiper/css';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CarruselPageRoutingModule,
    MisComponentesModule
  ],
  declarations: [CarruselPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CarruselPageModule {}
