import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table/table.component';
import { MaterialModule } from './material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { DialogModuleComponent } from './dialog-module/dialog-module.component';



@NgModule({
  declarations: [
    TableComponent,
    DialogModuleComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
  ],
  exports: [
  MaterialModule,
  TableComponent,
  DialogModuleComponent
  
  ]
})
export class SharedModule { }
