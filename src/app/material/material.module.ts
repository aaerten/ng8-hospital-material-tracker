import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatSliderModule } from '@angular/material/slider';
import { OperationsModule } from '../components/operations/operations.module';

const MaterialComponents = [
  OperationsModule,
  MatToolbarModule,
  MatButtonModule,
  MatIconModule,
  MatTableModule,
  NgbModule,
  MatSliderModule,
]

@NgModule({
  imports: [MaterialComponents],
  exports: [MaterialComponents]
})
export class MaterialModule { }
