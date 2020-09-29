import { Observable } from 'rxjs'
import * as data from './mock-data.json';
import { map } from 'rxjs/operators';

export class DataService {
    farms$: Observable<any>;

    getFarms() {
      return this.farms$ = new Observable((subs) => {
        subs.next(data);
      }).pipe(
          map((value) => value)
      );
    }
}

