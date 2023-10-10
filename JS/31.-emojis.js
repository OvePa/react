let prefix = "1F6";
let digits4 = "01234";
let digits5 = "01234567890ABCDEF";
let emojis = "";

for (let digit4 of digits4) {
  for (let digit5 of digits5) {
    let hexCode = "0x" + prefix + digit4 + digit5;
    //console.log(hexCode);
    emojis += String.fromCodePoint(hexCode);
  }
}

console.log(emojis);
