let balance = 1500;

document.getElementById('balance-amt').innerText = balance;

document.getElementById('deposit-btn').addEventListener('click', () => {
    let depositValue = parseInt(document.getElementById('deposit').value);
    deposit += depositValue;
    balance += depositValue;

    document.getElementById('deposit').value = '';
    document.getElementById('deposit-amt').innerText = deposit;
    document.getElementById('balance-amt').innerText = balance;
    deposit = 0;
});

document.getElementById('withdraw-btn').addEventListener('click', () => {
    let withdrawValue = parseInt(document.getElementById('withdraw').value);

    if (withdrawValue <= balance) {

        withdraw += withdrawValue;
        balance -= withdrawValue;

        document.getElementById('withdraw').value = '';
        document.getElementById('withdraw-amt').innerText = withdraw;
        document.getElementById('balance-amt').innerText = balance;
        withdraw = 0;
    }
    else alert('You do not have enough balance')
});