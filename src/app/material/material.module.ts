import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MdButtonModule, MdDialogModule, MdInputModule, MdSnackBarModule, MdToolbarModule,
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
  ],
  exports: [
    MdDialogModule,
    FlexLayoutModule,
    MdTooltipModule,
    MdToolbarModule,
    MdButtonModule,
    MdInputModule,
    MdSnackBarModule,
  ],
  declarations: []
})
export class MaterialModule { }
