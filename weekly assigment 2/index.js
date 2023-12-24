"use strict";
//temperature fahrenheit to celsius
let tempinFahrenheit = 78;
let Celsius = tempinFahrenheit - 32 * 5 / 9;
console.log("Temperarure in celsius=", Celsius);
//temperature Celsius to fahrenheit
let tempinCelsius = 45;
let fahrenheit = tempinCelsius * 9 / 5 + 32;
console.log("Temperature in Farhenheit=", fahrenheit);
// To find percentage...
function calculatePecentaage(marks, total) {
    return (marks / total) * 100;
}
console.log("Percentage of marks=", calculatePecentaage(75, 150));
//Calculate the discount of product.
let NoOfproduct = 4;
let productPrice = 10;
let producttotalPrice = NoOfproduct * productPrice;
if (producttotalPrice > 100) {
    let discount = producttotalPrice * 10 / 100;
    console.log("10 % discount is apply", discount);
}
else {
    let discount = producttotalPrice * 5 / 100;
    console.log("5% discount is apply", discount);
}
//Checking of leap year.
let year = 1994;
if (year % 4 == 0) {
    console.log("It is a leap year");
}
else {
    console.log("It is not a leap year");
}
//program thart convert the given number of days into week and days
function daysToWeeksAnddays(days) {
    const week = days / 7;
    const RemainingDays = days % 7;
    return [week, RemainingDays];
}
console.log("Days into weeks and days=", daysToWeeksAnddays(26));
//determine age.
let Age = 34;
if (Age > 0 && Age < 12) {
    console.log("Child");
}
else if (Age >= 13 && Age <= 19) {
    console.log("Teenager");
}
else {
    console.log("Adult");
}
//determine temperature and suggest the user to wear warm cloths.
function sugestClothing(Temperarure1 = 26) {
    if (Temperarure1 < 10) {
        return "its very cold please wear a heavy jacket and gloves";
    }
    else if (Temperarure1 < 20) {
        return "its cold wear sweater or light shawl";
    }
    else if (Temperarure1 < 30) {
        return "its cool long sleeves shirt should be sufficient";
    }
    else {
        return "its warm you can wear comfortable clothes like sleeveless shirt or short staller";
    }
}
let temperatureInput = 26;
let clothingSugestion = sugestClothing(temperatureInput);
console.log(clothingSugestion);
//Check the number divisible by 3 or 5 or both.
function checkDivisibility(num) {
    if (num % 3 == 0 && num % 5 == 0) {
        return "Divisible by both 3 and 5";
    }
    else if (num % 3 == 0) {
        return "Divisible by 3";
    }
    else if (num % 5 == 0) {
        return "Divisible by 5";
    }
    else {
        return "Not divisible by 3 and 5";
    }
}
let UserNumber = 45;
let result = checkDivisibility(UserNumber);
console.log(result);
