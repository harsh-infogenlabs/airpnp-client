export class CurrencyFormatter {
  private locale: string;
  private currencyCode: string;

  constructor(locale: string, currencyCode: string) {
    this.locale = locale;
    this.currencyCode = currencyCode;
  }

  format(amount: number): string {
    const formattedAmount = new Intl.NumberFormat(this.locale, {
      style: "currency",
      currency: this.currencyCode,
    }).format(amount);

    return formattedAmount;
  }
}
