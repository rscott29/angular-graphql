import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import {
  MatCardModule,
  MatButtonModule,
  MatGridListModule,
  MatSidenavModule,
  MatListModule,
  MatIconModule,
  MatToolbarModule,
  MatMenuModule
} from "@angular/material";
import {NgMaterialMultilevelMenuModule} from 'ng-material-multilevel-menu';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatGridListModule,
    MatCardModule,
    MatButtonModule,
    MatSidenavModule,
    NgMaterialMultilevelMenuModule,
    MatListModule,
    MatIconModule,
    MatToolbarModule,
    MatMenuModule
  ],
  exports: [
    MatGridListModule,
    MatCardModule,
    MatButtonModule,
    MatSidenavModule,
    NgMaterialMultilevelMenuModule,
    MatListModule,
    MatIconModule,
    MatToolbarModule,
    MatMenuModule
  ]
})
export class MaterialModule {}
