/*
A generator is a special function that returns an iterator. There are some differences between generator functions and regular functions:

- There is an * after the function keyword.
- Generator functions create iterators.
- We use the yield keyword in the created iterator function. By writing yield v, the iterator returns { value: v, done: false } as a value.
- We can also use the return keyword to end the iteration. Similar to iterators, the returned value won’t be enumerated by a data consumer.
- The yielded result is the next value of the iteration process. Execution of the generator function is stopped at the point of yielding. Once a data consumer asks for another value, execution of the generator function is resumed by executing the statement after the last yield.
*/
function* getLampIterator() {
  yield "red";
  yield "green";
  yield "blue";
  return "lastValue";
  // implcit: return undefined
}

let lampIterator = getLampIterator();

console.log(lampIterator.next());
//> {value: "red", done: false}

console.log(lampIterator.next());
//> {value: "green", done: false}

console.log([...lampIterator]);
//> [ 'blue' ]
console.log(lampIterator.next());
//> {value: "lastValue", done: true}

/*
Important:
If the return value were missing, the function would return {value: undefined, done: true}.

Use generators to define custom iterables to avoid using the well-known symbol Symbol.iterator.
 */

// When equating an array to an iterable, iteration takes place.

lampIterator = getLampIterator();

let [head] = lampIterator;

console.log("equating an array to an iterable:");
console.log(head, [...lampIterator]);
//> red []

/*
The destructuring assignment is executed as follows:

- First, lampIterator is substituted by an array of form [...lampIterator].
- Then the array is destructured, and head is assigned to the first element of the array.
- The rest of the values are consumed, but they are not assigned to any value on the left.
- As lampIterator was used to build an array with all elements on the right-hand side, [...lampIterator] is empty in the console log.
*/
