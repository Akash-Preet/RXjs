//----------------------------4) Reduce   -----------------------------------------------------

import { from, interval } from "rxjs";
import { reduce, scan, take } from "rxjs/operators";

//console.log([1, 2, 3, 4, 5].reduce((acc, cur) => acc + cur));

const num$ = from([1, 2, 3, 4, 5]);

const totalReducer = (acc, cur) => {
  console.log(acc, cur);
  return acc + cur;
};

// const reducer$ = interval(1000)
//   .pipe(take(3), reduce(totalReducer, 0))
//   .subscribe({
//     next: console.log,
//     complete: () => console.log("completed"),
//   });

const scanner$ = num$
  .pipe(
    scan((acc, cur) => {
      return acc + cur;
    }, 0)
  )
  .subscribe({
    next: console.log,
    complete: () => console.log("completed"),
  });

//----------------------------3) Progress bar   -----------------------------------------------------

// import { fromEvent } from "rxjs";
// import { map } from "rxjs/operators";

// function calculateScrollPercent(element) {
//   const { scrollTop, scrollHeight, clientHeight } = element;

//   return (scrollTop / (scrollHeight - clientHeight)) * 100;
// }

// const progressBar: any = document.querySelector(".progress-bar");

// const scroll$ = fromEvent(document, "scroll");

// const progress$ = scroll$.pipe(
//   map(({ target }: any) => calculateScrollPercent(target.scrollingElement))
// );

// progress$.subscribe((percent) => {
//   progressBar.style.width = `${percent}%`;
//   console.log(percent);
// });

//----------------------------2) filter   -----------------------------------------------------

// import { of, fromEvent, range } from "rxjs";
// import { filter, map } from "rxjs/operators";

// const subscriber$ = range(1, 20)
//   .pipe(filter((value) => value % 2 === 0))
//   .subscribe(console.log);

// const keyup$ = fromEvent(document, "keyup");
// const keycode$ = keyup$.pipe(map((event: KeyboardEvent) => event.code));
// const keyenter$ = keycode$.pipe(filter((code) => code === "Enter"));

// keycode$.subscribe(console.log);
// keyenter$.subscribe(console.log);

//----------------------------1) map      -----------------------------------------------------

// import { of, fromEvent } from "rxjs";
// import { map, mapTo, pluck } from "rxjs/operators";

// const subscriber$ = of(1, 2, 3, 4, 5)
//   .pipe(map((value) => value * 10))
//   .subscribe(console.log);

// const keyup$ = fromEvent(document, "keyup");
// const keyCode$ = keyup$
//   .pipe(map((event: KeyboardEvent) => event.code))
//   .subscribe(console.log);

// const keyCodeWithPluck$ = keyup$.pipe(pluck("code")).subscribe(console.log);

// const pressed$ = keyup$.pipe(mapTo("Key Pressed")).subscribe(console.log);
