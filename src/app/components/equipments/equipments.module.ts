import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EquipmentsRoutingModule } from './equipments-routing.module';
import { EquipmentsComponent } from './equipments.component';
import { RestService } from 'src/app/rest.service';
import { OperationsModule } from '../operations/operations.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';


@NgModule({
  declarations: [EquipmentsComponent],
  imports: [
    CommonModule,
    EquipmentsRoutingModule,
    OperationsModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2OrderModule,
    NgxPaginationModule,
    Ng2SearchPipeModule
  ],
  exports: [],
  providers: [RestService]
})
export class EquipmentsModule { }
