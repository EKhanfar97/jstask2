function convertCurrency(event) {
    event.preventDefault();

    const amountInput = document.getElementById('amount');
    const amount = parseFloat(amountInput.value);

    const currencySelect = document.getElementById('exchange');
    const selectedCurrency = currencySelect.value;

    let result = 0;
    switch (selectedCurrency) {
        case 'usd':
            result = amount * 0.29;
            break;
        case 'dinar':
            result = amount * 0.38;
            break;
        case 'nis':
            result = amount;
            break;
        default:
            break;
    }

    const resultElement = document.getElementById('result');
    resultElement.textContent = `Converted amount: ${result.toFixed(2)} ${selectedCurrency.toUpperCase()}`;
}