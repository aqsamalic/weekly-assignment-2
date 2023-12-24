//1.temperature fahrenheit to celsius
let tempinFahrenheit:number=78

let Celsius=tempinFahrenheit-32*5/9
console.log("Temperarure in celsius=",Celsius);

//2.temperature Celsius to fahrenheit

let tempinCelsius:number=45
let fahrenheit=tempinCelsius*9/5+32
console.log("Temperature in Farhenheit=",fahrenheit);



// 3.To find percentage...

function calculatePecentaage(marks:number,total:number){
    return(marks/total)*100;
    
}
console.log("Percentage of marks=",calculatePecentaage(75, 150));

//Calculate the discount of product.

let NoOfproduct:number =4
let productPrice:number=10
let producttotalPrice=NoOfproduct*productPrice
if(producttotalPrice>100){
   let discount =producttotalPrice*10/100
   console.log("10 % discount is apply",discount);
}
else{
    let discount=producttotalPrice*5/100
    console.log("5% discount is apply",discount);
}


//4.Checking of leap year.
let year=1994
if(year%4==0){
    console.log("It is a leap year");
}
else{
    console.log("It is not a leap year");
}

//5.program thart convert the given number of days into week and days
function daysToWeeksAnddays(days:number){
    const week:number=days/7;
    const RemainingDays:number=days%7;
    return [week,RemainingDays]
}
console.log ("Days into weeks and days=",daysToWeeksAnddays(26));

//6.determine age.
let Age:number=34
if(Age>0&&Age<12){
    console.log("Child");
}
else if(Age>=13&&Age<=19){
    console.log("Teenager");
}
else{
    console.log("Adult");
}

//7.determine temperature and suggest the user to wear warm cloths.

function sugestClothing(Temperarure1:number=26){
if(Temperarure1<10){
    return"its very cold please wear a heavy jacket and gloves";
}
else if (Temperarure1<20){
    return"its cold wear sweater or light shawl";
}
else if(Temperarure1<30){
    return"its cool long sleeves shirt should be sufficient";
}
else{
    return"its warm you can wear comfortable clothes like sleeveless shirt or short staller"
}
}
let temperatureInput:number=26
let clothingSugestion:string=sugestClothing(temperatureInput);
console.log(clothingSugestion);

//8.Check the number divisible by 3 or 5 or both.

function checkDivisibility(num:number){
    if(num%3==0 && num%5==0){
        return"Divisible by both 3 and 5";
    }
    else if(num%3==0){
        return"Divisible by 3";
    }
    else if(num%5==0){
        return"Divisible by 5";
    }
    else{
        return"Not divisible by 3 and 5";
    }
}
let UserNumber:number=45
let result:string=checkDivisibility(UserNumber);
console.log(result);

//9.Apply tax according to unit consumed.
function calculateBill(Unitsconsumed:number){
    let unitRate=10;
    let TaxRate=0;
    if(Unitsconsumed>100){
        TaxRate=0.1;
    }if(Unitsconsumed>200){
        TaxRate=0.15;
}if(Unitsconsumed>300){
    TaxRate=0.2;
}
      if(Unitsconsumed>500){
        TaxRate=0.25;
      }
    
    let totalAmount=Unitsconsumed*unitRate*(1+TaxRate);
        return totalAmount    
    }

    //10. Develope a program to determine the dayes of week  that takes number from the user(1-7).

    function determineDay(Daynumber:number){
        if(Daynumber == 1){
            return 'Sunday';
        }
        else if(Daynumber == 2){
            return 'Monday';
        }
        else if(Daynumber == 3){
            return 'Tuesday';
        }
        else if(Daynumber == 4){
            return 'Wednesday';
        }
        else if(Daynumber == 5){
            return 'Thursday';
        }
        else if(Daynumber == 6){
            return 'Friday';
        }
        else if(Daynumber ==7 ){
            return 'Saturday';
        }
    }
    const Daynumber=6
    const DayOfweek= determineDay(Daynumber)
    console.log("Corresponding days of week",DayOfweek);