
function total(inputBill, inputTip){
     inputBill = document.getElementById("bill").value;
     inputTip = document.getElementById("tip").value;
     
     let total = parseFloat((inputBill * (inputTip / 100))).toFixed(2);
     let letters = /^[a-zA-Z]+$/;

     if(inputBill.match(letters) || inputTip.match(letters)){
        total = document.getElementById("displayTotal").innerHTML = "$" + 0;
     }else{
       total = document.getElementById("displayTotal").innerHTML = "$" + total;
     }
    return  total;
}

function dividingTotal(inputBill, groupTotal){
    inputBill = document.getElementById("bill").value;
    groupTotal = document.getElementById("groupAmount").value;

    let letters = /^[a-zA-Z]+$/;
    let divideMeal = parseFloat(inputBill / groupTotal).toFixed(2);
   
    if(inputBill.match(letters) || groupTotal.match(letters)){
         totalAmount = document.getElementById("displayTotal").innerHTML = "$" + 0;
    }else{
        totalAmount = document.getElementById("displayTotal").innerHTML = "$" + divideMeal;
    }
    return divideMeal;
}