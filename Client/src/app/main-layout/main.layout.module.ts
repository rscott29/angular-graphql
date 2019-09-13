import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MaterialModule } from "../shared/material/material.module";
import { SidenavComponent } from "./sidenav/sidenav.component";
import { HeaderComponent } from "./header/header.component";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "../app-routing.module";



@NgModule({
  declarations: [SidenavComponent, HeaderComponent],
  imports: [BrowserModule, AppRoutingModule, CommonModule, MaterialModule],
  exports: [SidenavComponent, HeaderComponent]
})
export class MainLayoutModule {}
