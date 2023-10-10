let text = "\u{1F601}\u{1F43C}";
console.log("text: ", text);

for (let i in text) {
  console.log(text[i]);
}

for (let ch of text) {
  console.log(ch);
}
