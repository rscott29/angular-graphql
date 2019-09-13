import { OnInit, Component } from '@angular/core';
import { Cat } from '../Models/Cat';
import { CatsService } from '../cats.service';


@Component({
  selector: "app-cats-list",
  templateUrl: "./cats-list.component.html",
  styleUrls: ["./cats-list.component.css"]
})
export class CatsListComponent implements OnInit {
  cats: Cat;
  loading = true;
  error: any;

  constructor(private catsService: CatsService) {}

  ngOnInit() {
    this.catsService.getCats().subscribe(result => {
      this.cats = result.data && result.data.getCats;
      this.loading = result.loading;
      this.error = result
    });
  }
}
