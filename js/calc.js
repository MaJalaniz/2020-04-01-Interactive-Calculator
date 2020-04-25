

function total(inputBill, inputTip){
     inputBill = document.getElementById("bill").value;
     inputTip = document.getElementById("tip").value;
     let total = inputBill * inputTip;
     let totalBill = document.getElementById("displayTotal").innerHTML = "$" + total;
    return  totalBill;
}