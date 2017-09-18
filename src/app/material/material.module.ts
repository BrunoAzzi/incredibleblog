import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MdButtonModule, MdCardModule, MdDialogModule, MdInputModule, MdPaginatorModule, MdSelectModule, MdSnackBarModule,
  MdToolbarModule,
  MdTooltipModule
} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    MdToolbarModule,
    MdTooltipModule,
    MdButtonModule,
    MdDialogModule,
    MdInputModule,
    MdSnackBarModule,
    MdPaginatorModule,
    MdCardModule,
    MdSelectModule,
  ],
  exports: [
    MdCardModule,
    MdDialogModule,
    FlexLayoutModule,
    MdTooltipModule,
    MdToolbarModule,
    MdButtonModule,
    MdInputModule,
    MdSnackBarModule,
    MdPaginatorModule,
    MdSelectModule,
  ],
  declarations: []
})
export class MaterialModule { }
