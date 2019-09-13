import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CatsListComponent } from "../cats/cats-list/cats-list.component";
import { NewCatComponent } from "./new-cat/new-cat.component";
import { MaterialModule } from "../shared/material/material.module";
import { ReactiveFormsModule } from "@angular/forms";
import { CatRoutingModule } from "./cat-routing.module";
import { FlexLayoutModule } from "@angular/flex-layout";
@NgModule({
  declarations: [CatsListComponent, NewCatComponent],
  imports: [
    CommonModule,
    CatRoutingModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MaterialModule
  ]
})
export class CatsModule {}
