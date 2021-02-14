import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { ClinicsRoutingModule } from './clinics-routing.module';
import { ClinicsComponent } from './clinics.component';
import { RestService } from 'src/app/rest.service';
import { OperationsModule } from '../operations/operations.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  declarations: [ClinicsComponent],
  imports: [
    MatTableModule,
    CommonModule,
    ClinicsRoutingModule,
    OperationsModule,
    FormsModule, 
    ReactiveFormsModule,
    Ng2OrderModule,
    NgxPaginationModule,
    Ng2SearchPipeModule
    
  ],
  providers:[RestService]
})
export class ClinicsModule { }
