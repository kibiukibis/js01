// Šiuo metu Lietuvoje yra 26 laipsniai pagal Farenheitą,
// naudodamiesi JavaScript 
// apskaičiuokite kokia temperatūra yra pagal Celsijų.
// Būtinos sąlygos:
// - Turime "string" kintamąjį su tekstu "Lietuvoje šiuo metu laipsnių pagal Celsijų"
// - Negalima rašyti jokio papildomo teksto
// - Temperatūra pagal Celsijų turi būti nurodyta vienas skaičius po kablelio
// - Temperatūra turi būti konvertuojama iš Farenheito į Celsijų
// - Rezultatą išvesti konsolėje
// Rezultatas:
// Lietuvoje šiuo metu -3.3 laipsnių pagal Celsijų


var farenheit = 26;
var str = "Lietuvoje šiuo metu laipsnių pagal Celsijų";

function toCelsius() {
    return ((farenheit - 32) * 5 / 9).toFixed(1);
}
var first = str.substring(0, 20);
var last = str.substring(19);
console.log(first + toCelsius() + last);