let flights = [
  { source: "Dublin", destination: "Warsaw" },
  { source: "New York", destination: "Phoenix" },
];

for (let { source, destination } of flights) {
  console.log(source, destination);
}

for (let { source } of flights) {
  console.log(source);
}

//DOM
let divs = document.querySelectorAll("div");
for (let div of divs) {
  let rand = Math.floor(Math.random() * 3);
  div.style.color = ["#990000", "#009900", "#000099"][rand];
}
