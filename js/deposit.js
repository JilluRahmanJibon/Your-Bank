
document.getElementById('deposit-btn').addEventListener('click', function () {
    // step-2 : get the deposit amount frmo the deposit input field 
    // for input field use .value to the value inside the input field 
    const depositField = document.getElementById('deposit-field');
    const newDepositValueString = depositField.value;
    const newDepositValue = parseFloat(newDepositValueString)


    // step-3 : get the current deposit total 
    // for non-input (element other than input, textarea)use .innerText to get the text 
    const depositElement = document.getElementById('deposit-amount');
    const previusDepositTotalString = depositElement.innerText;
    const previusDepositTotal = parseFloat(previusDepositTotalString);

    // step-4: add numbers to set total  deposit 
    const currentDepositAmount = previusDepositTotal + newDepositValue;

    // step-5: get current total balance 
    const totalElement = document.getElementById('total-balance');
    const totalPreviusBalanceString = totalElement.innerText;
    const totalPreviusBalance = parseFloat(totalPreviusBalanceString);

    // step-6: calculate current total balance 
    const cuurentAmount = totalPreviusBalance + newDepositValue;


    if (newDepositValue > 0) {
        depositElement.innerText = currentDepositAmount;
        totalElement.innerText = cuurentAmount;
    } else {
        alert('Please input your valid Amount')
    }


    depositField.value = '';
})



// withdraw 
document.getElementById('withdraw-btn').addEventListener('click', function () {
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawValueString = withdrawField.value;
    const newWithdrawBalance = parseFloat(newWithdrawValueString);


    const withdrawBalanceTotal = document.getElementById('withdraw-balance-total');
    const withdrawBalanceString = withdrawBalanceTotal.innerText;
    const withdrawBalanceConvert = parseFloat(withdrawBalanceString);
    const withdrawBalance = withdrawBalanceConvert + newWithdrawBalance;




    const currenTotalElement = document.getElementById('total-balance');
    const currentBalanceString = currenTotalElement.innerText;
    const currentBalanceConvert = parseFloat(currentBalanceString);
    const currentBalance = currentBalanceConvert - newWithdrawBalance;


    if (newWithdrawBalance > 0 && newWithdrawBalance < currenTotalElement.innerText) {
        withdrawBalanceTotal.innerText = withdrawBalance;
        currenTotalElement.innerText = currentBalance;

    } else if (newWithdrawBalance > currenTotalElement.innerText) {
        alert('You have no sufficent balance')
    }
    else {
        alert('Please input your provide Number !!!')
    }








    withdrawField.value = '';


})



