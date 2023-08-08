
function calculatetip() {

var billAmount =document.getElementById("billAmount").value;
var servicetip = document.getElementById("servicetip").value;

var numPeople = document.getElementById("totalPeople").value;


if(billAmount==="" || servicetip == 0){
    window.alert("I am Computer ! I need Some value and Action to Further Procced");
    return; 
}

if(numPeople ===""|| numPeople <=1) {
    numPeople =1;

    document.getElementById("each").style.display = "none;"

} else{

     document.getElementById("each").style.display = "block";
}


var total = (billAmount*servicetip)/ numPeople;

total= total.toFixed(2);
console.log(billAmount)
var amountbill= (Number(billAmount) + Number(billAmount*servicetip));
console.log(amountbill)
 //// data ko html page pe load karne ke liye 
document.getElementById("totalTip").style.display = "block";
document.getElementById("tip").innerHTML = total;
document.getElementById("totalamount").style.display = "block";
document.getElementById("totalbillid").innerHTML = amountbill;

}



// hide tip amount and total amount 
document.getElementById("totalamount"). style.display ="none";
document.getElementById("totalTip"). style.display ="none";
document.getElementById("each"). style.display = "none";

