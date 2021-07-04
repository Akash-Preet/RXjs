import { Observable } from "rxjs";

let observer = {
  next: (value) => console.log("next:", value),
  error: (error) => console.log("error:", error),
  complete: () => console.log("Completed"),
};

const observable = new Observable((subscriber) => {
  // subscriber.next("Hello");
  // subscriber.next("World");
  // subscriber.complete();

  let count = 0;
  const id = setInterval(() => {
    subscriber.next(count);
    count++;
  }, 1000);

  return () => {
    console.log("close");
    clearInterval(id);
  };
});

const subscriptionOne = observable.subscribe(observer);
const subscriptionTwo = observable.subscribe(observer);

//subscriptionOne.add(subscriptionTwo);

setTimeout(() => {
  subscriptionOne.unsubscribe();
  subscriptionTwo.unsubscribe();
}, 1000);
