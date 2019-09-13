import { Injectable } from '@angular/core';
import { Cat } from './Models/Cat';
import { Apollo } from 'apollo-angular';
import { GetCat } from './Models/GetCats';
import { CAT_QUERY } from '../Queries/cat-query';
import { CreateCat } from './Models/CreateCat';
import { CAT_MUTATION } from '../Mutations/new-cat.mutation';


@Injectable({
  providedIn: "root"
})
export class CatsService {
  public newCat: Cat = new Cat();

  constructor(private apollo: Apollo) {}
  getCats() {
    return this.apollo.watchQuery<GetCat>({
      query: CAT_QUERY
    }).valueChanges;
  }
  createCat(cat: CreateCat) {
    return this.apollo.mutate({
      refetchQueries: [
        {
          query: CAT_QUERY
        }
      ],
      mutation: CAT_MUTATION,
      variables: {
        cat: cat
      }
    });
  }
}
