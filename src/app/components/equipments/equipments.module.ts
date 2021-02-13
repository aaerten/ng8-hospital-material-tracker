import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EquipmentsRoutingModule } from './equipments-routing.module';
import { EquipmentsComponent } from './equipments.component';
import { RestService } from 'src/app/rest.service';
import { OperationsModule } from '../operations/operations.module';


@NgModule({
  declarations: [EquipmentsComponent],
  imports: [
    CommonModule,
    EquipmentsRoutingModule,
    OperationsModule
  ],
  exports: [],
  providers: [RestService]
})
export class EquipmentsModule { }
