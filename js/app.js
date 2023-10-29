
function getField(elementId){
    const incomeField = document.getElementById(elementId);
    const incomeFieldString = incomeField.value;
    const income = parseInt(incomeFieldString);
    return income;

}



document.getElementById('btn-calculate').addEventListener('click', function(){
    const income = getField('income-field');
    const foodCost = getField('food-field');
    const rentCost = getField('rent-field');
    const clothsCost = getField('clothes-field');
    const totalCost = foodCost + rentCost + clothsCost;
    const remainingIncome = (income - totalCost);

    const totalExpenseElement = document.getElementById('total-expense');
    totalExpenseElement.innerText = totalCost;


    const remainingBalanceElement = document.getElementById('balance');
    remainingBalanceElement.innerText = remainingIncome;
    
})

document.getElementById('btn-save').addEventListener('click', function(){
    const incomeFieldElement = document.getElementById('income-field');
    const incomeAmount = incomeFieldElement.value;
    

    const savePercentageField = getField('save-percentage-field');
    const savePercentage = (savePercentageField / 100);
    
    const calculateSavePercentage = (incomeAmount * savePercentage);
    
    const savingAmount = document.getElementById('saving-amount');
    savingAmount.innerText = calculateSavePercentage;

    const lastBalance = document.getElementById('balance');
    const lastBalanceString = lastBalance.innerText;
    const balance = parseInt(lastBalanceString);

    const remainingBalance = (balance - calculateSavePercentage);
    const remainingBalanceElement = document.getElementById('remaining-balance');
    remainingBalanceElement.innerText = remainingBalance;
})