function createFormatter(separator, symbol, symbolFirst, currencyFormatter) {
  return currencyFormatter.bind(this, separator, symbol, symbolFirst);
}


