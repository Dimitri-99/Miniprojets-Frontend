
document.addEventListener('DOMContentLoaded', () => {
    const fromCurrencySelect = document.getElementById('from-currency');
    const toCurrencySelect = document.getElementById('to-currency');
    const currencies = ['USD', 'EUR', 'FCFA', 'GBP', 'JPY', 'CAD'];
    currencies.forEach(currency => {
        const optionFrom = document.createElement('option');
        optionFrom.value = currency;
        optionFrom.textContent = currency;
        fromCurrencySelect.appendChild(optionFrom);
        const optionTo = document.createElement('option');
        optionTo.value = currency;
        optionTo.textContent = currency;
        toCurrencySelect.appendChild(optionTo);
    });
    fromCurrencySelect.value = 'USD';
    toCurrencySelect.value = 'EUR';
});

const ratesToUSD = {
    USD: 1,
    EUR: 1.1,   
    FCFA: 0.0017, 
    GBP: 1.3,   
    JPY: 0.0065, 
    CAD: 0.75  
};

function convert(amount, from, to) {
    if (!ratesToUSD[from] || !ratesToUSD[to]) return null;
    
    const amountInUSD = amount * ratesToUSD[from];
    const result = amountInUSD / ratesToUSD[to];
    return result;
}

document.getElementById('currency-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const amount = parseFloat(document.getElementById('amount').value);
    const fromCurrency = document.getElementById('from-currency').value;
    const toCurrency = document.getElementById('to-currency').value;
    const resultDiv = document.getElementById('result');
    if (isNaN(amount) || amount <= 0) {
        resultDiv.textContent = 'Veuillez entrer un montant valide.';
        resultDiv.style.color = '#e11d48';
        return;
    }
    if (fromCurrency === toCurrency) {
        resultDiv.textContent = `Aucune conversion nécessaire : ${amount} ${fromCurrency} = ${amount} ${toCurrency}`;
        resultDiv.style.color = '#22223b';
        return;
    }
    const converted = convert(amount, fromCurrency, toCurrency);
    if (converted === null) {
        resultDiv.textContent = 'Conversion impossible.';
        resultDiv.style.color = '#e11d48';
        return;
    }
    resultDiv.textContent = `${amount} ${fromCurrency} = ${converted.toFixed(2)} ${toCurrency}`;
    resultDiv.style.color = '#22223b';
});