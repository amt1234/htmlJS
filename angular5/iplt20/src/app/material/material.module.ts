import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatToolbarModule,MatCardModule} from '@angular/material';

@NgModule({
  imports: [MatToolbarModule,MatCardModule],
  exports:[MatToolbarModule,MatCardModule]
})
export class MaterialModule { }
