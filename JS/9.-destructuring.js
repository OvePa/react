let notgood = "not good".split("");
let [, , , , ...good] = notgood;

console.log(good);

let [, , , , , , , , , , , , , , , , ...empty] = notgood;
console.log(empty);
