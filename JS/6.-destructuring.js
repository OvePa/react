function drawCart(
  data,
  { chartType = 0, bullColor = "green", bearColor = "red", days = 30 }
) {
  return { chartType, bullColor, bearColor, days };
}

drawCart();
