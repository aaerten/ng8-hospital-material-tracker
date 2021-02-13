import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClinicsRoutingModule } from './clinics-routing.module';
import { ClinicsComponent } from './clinics.component';
import { RestService } from 'src/app/rest.service';
import { OperationsModule } from '../operations/operations.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ClinicsComponent],
  imports: [
    CommonModule,
    ClinicsRoutingModule,
    OperationsModule,
    FormsModule, 
    ReactiveFormsModule
  ],
  providers:[RestService]
})
export class ClinicsModule { }
