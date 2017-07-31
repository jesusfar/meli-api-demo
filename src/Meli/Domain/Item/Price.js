class Price {
  constructor(currency, amount, decimals) {
    this.currency = currency;
    this.amount = amount;
    this.decimals = decimals;
  }

  get getCurrency() {
    return this.currency;
  }

  get getAmount() {
    return this.amount;
  }

  get getDecimals() {
    return this.decimals;
  }
}

module.exports = Price;
