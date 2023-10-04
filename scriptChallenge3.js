
const leoName = 'Leo';
const leoSurname = 'Musvaire';
const leoBalance = "-9394";

const sarahName = 'Sarah';
const sarahSurname = 'Kleinhans';
const sarahBalance = "-4582.2";

const divider = '----------------------------------';

// Only change below this line

const owed = Math.abs(leoBalance) + Math.abs(sarahBalance); // change values to be positive
const leo = `${leoName} ${leoSurname} Owed: R${Math.abs(leoBalance).toFixed(2)}`;
const sarah = `${sarahName} ${sarahSurname} Owed: R${Math.abs(sarahBalance).toFixed(2)}`;
const total = "Total amount owed: ";
const convert = new Intl.NumberFormat('en-US').format(owed);

const result = leo + "\n" + sarah + "\n" + divider  + "\n" + total + "R" + convert + "\n" + divider;

console.log(result);
  



