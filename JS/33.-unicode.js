console.log("\u{1f600}"); // becomes an emoji
console.log("\u{1f600}".length); // is 2
console.log("\u{1f600}".charCodeAt(0)); // is 55357
console.log("\u{1f600}".codePointAt(0)); // is 128512
console.log("\u{1f600}".charCodeAt(1)); // is 56832
console.log("\u{1f600}".codePointAt(1)); // is 56832
console.log("\u{1f600}".startsWith("\u{1f600}"[0])); // is true

//Note that the startsWith, endsWith, includes methods interpret the result in two-byte chunks.

let str = "\u{1f600}\u{00fa}é";

for (const ch of str) {
  console.log(ch);
}
