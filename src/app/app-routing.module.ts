import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', loadChildren: './components/clinics/clinics.module#ClinicsModule', pathMatch: 'full' },
  { path: 'equipments', loadChildren: './components/equipments/equipments.module#EquipmentsModule'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
