import { Component, OnDestroy } from '@angular/core';
import { filter, interval, map, Observable, retry, Subscription, take } from 'rxjs';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: [
  ]
})
export class RxjsComponent implements OnDestroy{

  intervalSubs!: Subscription;
  constructor() {

  //  this.retornObservable().pipe(
  //     retry()
  //     )
  //   .subscribe({
  //     next: value => console.log('Subs:', value), 
  //     error: err => console.warn('Error', err),
  //     complete: () => console.info('Obs terminado') 
  //   });

    this.intervalSubs = this.retornaIntervalo().subscribe((valor)=>{
      console.log(valor);
    });
   }
  ngOnDestroy(): void {
    this.intervalSubs.unsubscribe();
  }

   retornaIntervalo(){
     const interval$ = interval(1000).pipe(map(valor => {return valor +1;}),
                                          filter(valor=> (valor % 2===0) ? true: false), 
                                          take(10));

     return interval$
   }

   retornObservable(){
    let i = -1;

    const obs$ = new Observable<number>(observer => {

      const intervalo = setInterval(() =>{
        i++;
        observer.next(i);
        if(i===4){
          clearInterval(intervalo);
          observer.complete();
        }
      }, 1000)
    });
    return obs$;
   }


}
