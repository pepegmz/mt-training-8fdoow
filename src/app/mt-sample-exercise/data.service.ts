import { Observable } from 'rxjs'
import * as data from './mock-data.json';
import { map } from 'rxjs/operators';

export class DataService {
    farms$: Observable<any>;

    getFarms() {
      return this.farms$ = new Observable((subs) => {
        subs.next(data);
      }).pipe(
          map((value: any) => value?.default)
      );
    }

    getFarmsByNo() {
      return this.farms$ = new Observable((subs) => {
        subs.next(data);
      }).pipe(
          map((value: any) => value?.default.filter((value) => String(value?.FarmNo).startsWith('100')))
      );
    }

    getFarmsByDate() {
      return this.farms$ = new Observable((subs) => {
        subs.next(data);
      }).pipe(
          map((value: any) => value?.default.filter((value) => new Date(value?.ActiveDate).getFullYear() === 2020))
      );
    }
}

