import { AsyncPipe } from '@angular/common';
import { Component, signal } from '@angular/core';
import {
  catchError,
  debounceTime,
  filter,
  from,
  map,
  Observable,
  of,
  Subscription,
  take,
  tap,
} from 'rxjs';

@Component({
  selector: 'app-observables',
  imports: [AsyncPipe],
  templateUrl: './observables.html',
  styleUrl: './observables.css',
})
export class Observables {
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    // this.promiseHandler();
    this.observableHandler();
  }

  search(event: Event): void {
    const text = (event.target as HTMLInputElement).value;
    console.log(text);
  }

  // Async => API, setTimeout

  promiseHandler(): void {
    const promise = new Promise((res, rej) => {
      console.log('Promise Init');
      if (6 > 4) {
        res('Success');
      } else {
        rej('Error');
      }
    });

    promise
      .then((data) => {
        console.log(data); // Success + Hello
      })
      .catch((e) => {
        console.log(e); // Error
      })
      .finally(() => {
        // console.log("Finally")
      });
  }
  users!: User[];
  subscription!: Subscription;

  myObservable$!: Observable<number>;

  // value: number = 0;

  valueSignal = signal(0);

  isLoading: boolean = false;
  observableHandler(): void {
    this.myObservable$ = new Observable<number>((observer) => {
      // const users: User[] = [
      //   { id: 1, name: 'Ahmed' },
      //   { id: 2, name: 'Mohamed' },
      // ];
      // observer.next(users);
      // observer.error('error');
      setTimeout(() => {
        observer.next(1);
      }, 1000);
      setTimeout(() => {
        observer.next(2);
      }, 1500);
      setTimeout(() => {
        observer.next(3);
      }, 2000);

      return observer;
    }).pipe(map((e) => e * 2));

    // this.myObservable$.subscribe({
    //   next:(val)=>{this.valueSignal.set(val)}
    // })

    // const myObservable$ = of(1, 2, 3, 4, 5);
    // const myObservable = from([1, 2, 3, 4, 5]);

    // this.subscription =
    // this.myObservable$
    //   .pipe
    // map((val) => val * 2),
    // filter((val) => val > 5),
    // tap((val) => {
    //   console.log(val);
    //   this.isLoading = true;
    // }),
    // take(1)
    // debounceTime(1000)
    // take(2)
    // catchError((err) => of([{id:3,name:"Fall Back"}]))
    // ()
    // .subscribe({
    //   next: (value: number) => {
    //     // this.value = value;
    //     this.valueSignal.set(value)
    //     console.log(value);
    //   },
    //   // error: (err) => {
    //   //   console.log(err);
    //   // },
    // });

    // 6,8,10
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    // if (this.subscription) {
    // this.subscription.unsubscribe();
    // }
  }
}

interface User {
  id: number;
  name: string;
}
