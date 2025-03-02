

function generateWidget() {
    let borderColor = document.getElementById('borderColor').value;
    let bgColor = document.getElementById('bgColor').value;
    let language = document.getElementById('language').value;
    let crypto = document.getElementById('crypto').value || 'BTC';
    let referral = document.getElementById('referral').value;

    let widget = document.getElementById('widget').value || 'crypto'
    let currency = document.getElementById('currency').value || 'usd'
    let header = document.getElementById('header').value === 'true' ? true : false
    let widgetUrl;

    if (widget == 'crypto'){
        widgetUrl = `https://wallet-solution.com/widget/crypto` + 
        `?lang=${language}` + 
        `&border=` + encodeURIComponent(`1px solid ${borderColor}`) + 
        `&bg=` + encodeURIComponent(`${bgColor}`) + 
        `&ref=${referral}` + 
        `&header=${header}` + 
        `&toCurrency=${currency}`

    } else if (widget == 'convert') {
        widgetUrl = `https://wallet-solution.com/widget/convert/${crypto}?lang=${language}` + 
        `&border=` + encodeURIComponent(`1px solid ${borderColor}`) + 
        `&bg=` + encodeURIComponent(`${bgColor}`) + 
        `&ref=${referral}&header=${header}` +
        `&toCurrency=${currency}`;
    } else if (widget == 'graphics') {
        widgetUrl = `https://wallet-solution.com/widget/graphics/${crypto}?lang=${language}` + 
        `&border=` + encodeURIComponent(`1px solid ${borderColor}`) + 
        `&bg=` + encodeURIComponent(`${bgColor}`) + 
        `&ref=${referral}&header=${header}` +
        `&toCurrency=${currency}`;
    }


     
    
    document.getElementById('widgetPreview').src = widgetUrl;
    document.getElementById('widgetCode').value = `<iframe src="${widgetUrl}" height="420px" scrolling="no"></iframe>`;
}

function copyCode() {
    let code = document.getElementById('widgetCode');
    code.select();
    document.execCommand('copy');
}

function calculateIncome() {
    let users = document.getElementById("usersRange").value
    let amount = document.getElementById("amountRange").value
    
    document.getElementById("usersCount").innerText = users;
    document.getElementById("amountCount").innerText = "$" + amount;
    
    let income = (users * amount * 0.005).toFixed(2);
    document.getElementById("incomeResult").innerHTML = "<b>$" + income + "</b>";
    document.getElementById("platformIncomeResult").innerHTML = "<b>$" + income + "</b>";
}


window.calculateIncome = calculateIncome