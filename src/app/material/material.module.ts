import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MdButtonModule, MdCardModule, MdDialogModule, MdInputModule, MdPaginatorModule, MdSnackBarModule, MdToolbarModule,
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
  ],
  declarations: []
})
export class MaterialModule { }
