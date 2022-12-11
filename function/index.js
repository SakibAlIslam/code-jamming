//button selection.....................
var totalButton = document.querySelector('.totalButton');

//summation function........
function sum() {
    //input selection......................
    var input1 = document.querySelector('.input-1').value || 0; //string value
    var input2 = document.querySelector('.input-2').value || 0; //string value
    var totalAmount = document.querySelector('.totalAmount'); //total amount selection

    var summation = parseInt(input1) + parseInt(input2); //convert string to number and summation.
    
    totalAmount.innerText = 'Your Total Amount is ' + summation + ' BDT!';
}

//deduction function........
function deduction() {
    //input selection......................
    var input3 = document.querySelector('.input-3').value || 0; //string value
    var input4 = document.querySelector('.input-4').value || 0; //string value
    var deductedAmount = document.querySelector('.deductedAmount'); //deducted amount selection

    var deduction = parseInt(input3) - parseInt(input4); //convert string to number and deduction.
    
    deductedAmount.innerText = 'Your Total Amount is ' + deduction + ' BDT!';
}