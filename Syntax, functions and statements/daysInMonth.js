function daysInMonth(month, year){
let res = new Date(year, month, 0).getDate();
return res;
}
console.log(daysInMonth(2, 2021))