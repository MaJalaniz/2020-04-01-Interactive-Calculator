
function total(inputBill, inputTip){
     inputBill = document.getElementById("bill").value;
     inputTip = document.getElementById("tip").value;
     
     let total = parseFloat((inputBill * (inputTip / 100))).toFixed(2);
     let totalBill = document.getElementById("displayTotal").innerHTML = "$" + total;

    return  totalBill;
}

function dividingTotal(inputBill, groupTotal){
    inputBill = document.getElementById("bill").value;
    groupTotal = document.getElementById("groupAmount").value;

    let divideMeal = inputBill / groupTotal;
    let totalAmount = document.getElementById("displayTotal").innerHTML = "$" + divideMeal;

    return divideMeal;
}