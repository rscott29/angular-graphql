import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { CatsService } from "../cats.service";
import { CreateCat } from '../Models/CreateCat';

@Component({
  selector: "app-new-cat",
  templateUrl: "./new-cat.component.html",
  styleUrls: ["./new-cat.component.css"]
})
export class NewCatComponent implements OnInit {
  newCatForm: FormGroup;
  newCat: CreateCat;
  constructor(private fb: FormBuilder, private catService: CatsService) {}

  ngOnInit() {
    this.newCatForm = this.fb.group({
      name: "",
      breed: "",
      age: ""
    });
  }
  onSubmit() {
    this.newCat = { ...this.catService.newCat, ...this.newCatForm.value };
    this.catService.createCat(this.newCat).subscribe(
      () => {
        this.catService.getCats();
      },
      error => {
        console.log("there was an error sending the query", error);
      }
    );
  }
}
