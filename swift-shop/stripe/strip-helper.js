export function formatAmountForStripe(amount, currency) {
    let numberFormat = new Intl.NumberFormat(["en-IN"], {
        style: "currency",
        currency: currency,
        currencyDisplay: "symbol",
    });

    const parts = numberFormat.formatToParts(amount);

    let zeroDecimalCurrency = true;

    for (let part of parts) {
        if (part.type === "decimal") {
            zeroDecimalCurrency = false;
        }
    }

    // Ensure the amount is in cents for currencies like USD
    if (currency === "usd" && amount < 1) {
        // Ensure the amount is in dollars before passing to Stripe
        amount = Math.round(amount * 100);
    }

    return zeroDecimalCurrency ? amount : Math.round(amount * 100);
}
