let set1 = [1, 2, 3, 4, 5, 6, 5, 4, 3, 2];
let set2 = [3, 2, 1, 4, 2, 7];

let union = (set1, set2) => new Set([...set1, ...set2]);
let intersection = (set1, set2) =>
  new Set([...set1].filter((elem) => set2.has(elem)));
let difference = (set1, set2) =>
  new Set([...set1].filter((elem) => !set2.has(elem)));

set1.has(2);
