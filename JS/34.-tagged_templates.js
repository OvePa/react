let emulatedSubs = "${sub1}abc ${sub2} def${sub3}".split(/\${\w*}/);
console.log(emulatedSubs);

//tagFunction( literalFragments, ...substitutionValues )

let sub1 = 1,
  sub2 = 2,
  sub3 = 3;
((x, ...subs) => {
  console.log(x, ...subs);
})`${sub1}abc ${sub2} def${sub3}`;

let salutation = (literalFragments) => `Hello, ` + literalFragments[0];

console.log(salutation`Ashey`);

//If variable substitutions occur inside the template literal, their values can also be manipulated using tag functions.
let price = 5999.9;
let currencySymbol = "€";
let productName = "Titanium Toothbrush";

let formatCurrency = function (currency, amount) {
  return amount.toFixed(2) + currency;
};

let format = (textArray, ...substitutions) => {
  let template = textArray[0];
  template += substitutions[0];
  template += textArray[1];
  template += formatCurrency(substitutions[1], substitutions[2]);
  template += textArray[3];

  return template;
};

/*
<div class="js-product">
    Product: Titanium Toothbrush
</div>
<div class="js-price">
    Price: 5999.90€
</div>
*/
