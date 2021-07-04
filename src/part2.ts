import { fromEvent, of, range, from, interval, timer } from "rxjs";

const observer = {
  next: (value) => console.log("next:", value),
  error: (error) => console.log("error:", error),
  complete: () => console.log("Completed"),
};

const src1$ = fromEvent(document, "click");

const sub1 = src1$.subscribe(observer);

setTimeout(() => {
  sub1.unsubscribe();
}, 1000);

// const src2$ = of(1, 2, 3, 4, 5);
// const sub2 = src2$.subscribe(observer);

// const src3$ = range(1, 5);
// const sub3 = src3$.subscribe(observer);

// const src4$ = from([1,2,3,4,5]);
// const src4$ = from(["Hello", "World"]);
// const src4$ = from("Hello");
// const src4$ = from(fetch("https://api.github.com/users/octocat"));

function* hello() {
  yield "Hello";
  yield "World";
}

const iterators = hello();
// console.log(iterators.next().value);
// console.log(iterators.next().value);

// const src4$ = from(iterators);
// const sub4 = src4$.subscribe(observer);

// const src5$ = interval(1000);
// const sub5 = src5$.subscribe(console.log);

// const src6$ = timer(0, 3000);
// const sub6 = src6$.subscribe(console.log);
