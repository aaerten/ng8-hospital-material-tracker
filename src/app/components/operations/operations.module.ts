import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditClinicComponent } from '../edit-clinic/edit-clinic.component';
import { EditEquipmentComponent } from '../edit-equipment/edit-equipment.component';
import { AddClinicComponent } from '../add-clinic/add-clinic.component';
import { AddEquipmentComponent } from '../add-equipment/add-equipment.component';
import { DeleteClinicComponent } from '../delete-clinic/delete-clinic.component';
import { DeleteEquipmentComponent } from '../delete-equipment/delete-equipment.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';





@NgModule({
  declarations: [EditClinicComponent,EditEquipmentComponent,AddClinicComponent,AddEquipmentComponent,DeleteClinicComponent,DeleteEquipmentComponent],
  imports: [
    CommonModule, FormsModule, ReactiveFormsModule
  ],
  exports: [EditClinicComponent, EditEquipmentComponent, AddClinicComponent, AddEquipmentComponent, DeleteClinicComponent, DeleteEquipmentComponent]
})
export class OperationsModule { }
