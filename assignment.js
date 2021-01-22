// kilometer To meter;

function kilometerToMeter(kilometer){
    var result = 1000 * kilometer ;
    return result;
}
var finalMeter = kilometerToMeter(5);
console.log(finalMeter);




//  Hotelcost

function hotelCost(days){
     var totalRent = 0;
     if(days <= 10){
         rent = days * 100;
         totalRent = rent
        
     }
     else if(days <= 20){
             var tenDays = 10 * 100;
         var remainingDays = days - 10;
         var nextTenDays = remainingDays * 80;
         twentyDaysRent = tenDays + nextTenDays;
         totalRent = twentyDaysRent
     }
         else{
        var tenDays = 10 * 100;
         var nextTenDays = 10 * 80;
         var remainingDays = days - 20;
         var nextFiftyDays = remainingDays * 50;
         totalRent = tenDays + nextTenDays + nextFiftyDays;
     }
    
     return totalRent;
}

//  Budgetcalculator

function budgetCalculator(){
     var watch = 10;
     var wPrice = 50;
     var wSum = watch * wPrice;
     console.log(wSum);

     var phone = 7;
     var pPrice = 100;
     var pSum = phone * pPrice;
     console.log(pSum);

     var laptop = 5;
     var lPrice = 500;
     var lSum = laptop * lPrice;
     console.log(lSum);

     totalPrice = wSum + pSum + lSum;
     return totalPrice;
}
var budget = budgetCalculator();
console.log(budget);


// Magafriend

function magaFriend(name){
    var longName = "";
    for(var i = 0; i < name.length; i++){
        if(name[i] > longName){
            longName = name[i];
        }
    }
    return longName;
}

