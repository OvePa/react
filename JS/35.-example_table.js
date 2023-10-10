let departures = [
  {
    id: "KL 1255",
    destination: "Amsterdam",
    departureTime: "21:55",
    gate: "A13",
  },
  {
    id: "OK 001",
    destination: "Prague",
    departureTime: "20:40",
    gate: "A13",
    status: "Check-in",
  },
  {
    id: "4U 2011",
    destination: "Stuttgart",
    departureTime: "20:35",
    gate: "A11",
    status: "Check-in",
  },
  {
    id: "LX 911",
    destination: "Zurich",
    departureTime: "20:15",
    expectedDepartureTime: "21:15",
    status: "check-in",
  },
  {
    id: "OS 133",
    destination: "Vienna",
    departureTime: "19:25",
    gate: "A06",
    status: "Departed",
  },
];

let headers = {
  id: "Id",
  destination: "Destination",
  departureTime: "DepartureTime",
  expectedDepartureTime: "Expected Departure Time",
  gate: "Gate",
  status: "Status",
};

let tableHeader = `
<tr>
<th>${headers.id}</th>
<th>${headers.destination}</th>
<th>${headers.departureTime}</th>
<th>${headers.expectedDepartureTime}</th>
<th>${headers.gate}</th>
<th>${headers.status}</th>
</tr>
`;

let testTable = `<table>${tableHeader}`;

for (var i = 0; i < departures.length; i++) {
  let departure = departures[i];
  let tableRow = `
	<tr>
	<td>${departure.id}</td>
	<td>${departure.destination}</td>
	<td>${departure.departureTime}</td>
	<td>${departure.expectedDepartureTime}</td>
	<td>${departure.gate}</td>
	<td>${departure.status}</td>
	</tr>
	`;
  testTable += `${tableRow}`;
}
testTable += `</table>`;
console.log(testTable);
