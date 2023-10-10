console.log(
  "Rindfleischetikettierungsüberwachungsaufgabenübertragungsgesetz".startsWith(
    "Rindfleisch"
  )
);
//> true
console.log("not good".endsWith("good"));
//> true

console.log("good or bad".includes(" or "));
//> true

console.log("ha".repeat(4));
//> 'hahahaha'

//Note that the startsWith, endsWith, includes methods interpret the result in two-byte chunks.
