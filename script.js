const calculateTip = () => {
    
    const calculate = (amount, quality) => {
        let percentage;
        switch (quality) {
            case '5':
                percentage = 0.15; 
                break;
            case '3':
                percentage = 0.10;
                break;
            case '1':
                percentage = 0.05; 
                break;
            default:
                percentage = 0;
        }
        return amount * percentage;
    };

    
    const displayResult = (tip) => {
        const resultElement = document.getElementById('result');
        resultElement.innerHTML = `Gorjeta: R$ ${tip.toFixed(2)}`;
    };

    
    const billAmount = parseFloat(document.getElementById('billAmount').value);
    const serviceQuality = document.getElementById('serviceQuality').value;

    
    if (isNaN(billAmount) || billAmount <= 0) {
        alert('Por favor, insira um valor válido para a conta.');
        return;
    }

    
    const tip = calculate(billAmount, serviceQuality);
    displayResult(tip);
};